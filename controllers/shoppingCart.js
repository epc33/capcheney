const ShoppingCart = require('../models/ShoppingCart');

exports.viewShoppingCart = (req, res) => {
	ShoppingCart.find({}, (err, shoppingCart) => {
		if(err) throw err;
		console.log(shoppingCart);
		res.render('shoppingCart',{ShoppingCart})
	})
};	