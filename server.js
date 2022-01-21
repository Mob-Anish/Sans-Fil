const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION!! Shutting down....");
  console.log(err);
  // console.log(err.name, err.message);
  process.exit(1);
});

// Reading config.env file and setting it to node environment variables.
dotenv.config({ path: "./config/config.env" });

const app = require("./app");

//--------- CONNECTION TO DATABASE ----------//
const DB = process.env.MONGO_DATABASE.replace(
  "<PASSWORD>",
  process.env.MONGO_DATABASE_PASSWORD
);

// Mongoose connects to the AtlasDb
// .connect returns promise
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
    console.log("DB connection failed");
  });

//------- SERVER STARTING AT 4000 --------//
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Running on port:${port}`);
});

// Handling Unhandled rejected promise
process.on("unhandledRejection", (err) => {
  console.log("UNCAUGHT EXCEPTION!! Shutting down.....");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); // crashing application
  });
});
