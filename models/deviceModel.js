const mongoose = require("mongoose");

// Schema
const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  pin_no: {
    type: Number,
    required: true,
  },
  watt: {
    type: Number,
    required: [true, "A product must have a watt"],
  },
  status: {
    type: Number,
    enum: [0, 1],
  },
  userId: [mongoose.Schema.ObjectId],
});

// Populate user data
// deviceSchema.pre(/^find/, function (next) {
//   this.populate("user");
//   next();
// });

// Model
const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
