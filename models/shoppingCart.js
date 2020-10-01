const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	orderID: Number,
	customerName: {firstName: String, lastName: String},
	products: [
		{
			productName: String,
			productDescription: String,
			productPrice: Number,
			productQuantity: Number,
			productTotal: Number
		}
		],
		
	totalItems: Number,
	cartTotal: Number,
})

const ShoppingCart = mongoose.model('ShoppingCart',cartSchema);

module.exports = ShoppingCart;