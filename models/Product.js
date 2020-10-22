const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
  productID: { type: String, unique: true },
  productName: type: String,
  productDescription: String,
  prductType: String,
  productCost: Number,
  }, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;