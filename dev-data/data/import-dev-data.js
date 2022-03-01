const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");
const Device = require("../../models/deviceModel");

dotenv.config({ path: "./config/config.env" });

//----- Database Connection ------//
const DB = process.env.MONGO_DATABASE.replace(
  "<PASSWORD>",
  process.env.MONGO_DATABASE_PASSWORD
);

// Mongoose connect to the Atlasdb
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection succesful");
  })
  .catch((err) => {
    console.log("DB connection failed");
  });

// READ JSON FILE
const devices = JSON.parse(
  fs.readFileSync(`${__dirname}/devices-simple.json`, "utf-8")
);

// Import data into DB
const importData = async () => {
  try {
    await Device.create(devices);
    console.log("Data succesfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit(); // Exit the application
};

// Delete all data from DB
const deleteData = async () => {
  try {
    await Device.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

console.log(process.argv);

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
