const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  created_at: { type: Date },
  updated_at: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = model("Product", ProductSchema);
