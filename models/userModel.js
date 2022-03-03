const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  accessToken: {
    type: String,
    // default: "03DE11F42DF93724B745A5F3F6DB001A",
  },
});

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;
