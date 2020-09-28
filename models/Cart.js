const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	orderID: Number,
	customerName: {firstName: String, lastName: String},
	products: [
		{
			productName: String,
			description: String,
			price: Number,
			quantity: Number,
			total: Number
		}
		],
		
	totalItems: Number,
	cartTotal: Number,
})

const cart = mongoose.model('Cart',cartSchema);

module.exports = cart;