const Cart = require('../models/Cart');

exports.viewCart = (req, res) => {
	Cart.find({}, (err, Cart) => {
		if(err) throw err;
		console.log(Cart);
		res.render('Cart',{Cart})
	})
};
	