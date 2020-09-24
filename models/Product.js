const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
productid: {type: String, unique: true},
productname: String,
price: Float,  
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
