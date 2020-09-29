const { interfaces } = require('mocha');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
productId: {type: String, unique: true},
productName: String,
productPrice: Number,
productDescription: String,  
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
