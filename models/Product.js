const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
productid: {type: String, unique: true},
productname: {type: String, unique: true},
price: float,  
