const Cart = require('../models/Cart');

exports.getAllItems = (req, res) => {
	Cart.find({}, (err, carts) => {
		if(err) throw err;
		res.render('account/shoppingcart',{carts})
	})
};	