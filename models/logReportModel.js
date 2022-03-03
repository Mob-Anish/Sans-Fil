const mongoose = require("mongoose");

const logReportSchema = new mongoose.Schema({
  deviceId: {
    type: mongoose.Schema.ObjectId,
    ref: "Device",
    required: [true, "Log report must belong to a device"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Log report must belong to a User!"],
  },
  status: {
    type: Number,
    enum: [0, 1],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Populate user and device data
logReportSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "device",
  });
});

const LogReport = mongoose.model("LogReport", logReportSchema);

module.exports = LogReport;
