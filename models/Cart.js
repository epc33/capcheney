const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
{
  productId: { type: String, unique: true },
  productName: { type: String, unique: true },
  productDescription: String,
  productCost: Number,
  productQuantity: Number,
  }, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;