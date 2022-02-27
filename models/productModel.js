const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
