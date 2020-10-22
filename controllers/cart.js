const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

exports.getAllItems = (req, res) => {
    Cart.find({}, (err, carts) => {
        if (err) throw err;
        res.render('account/shoppingcart', {carts})
    });
}

exports.viewShoppingCart = (req, res) => {
    User.findOne({loggedIn: true}, (err, users) => {
        Cart.findOne({accountID: users.accountID}, (err, carts) => {
            console.log(carts);
            if (err) throw err;
            res.render('shoppingCart', {carts})
        });
    });
};

exports.addProduct = (req, res) => {
    const product = new Product({
        productID: req.query.productID,
        productName: req.query.productName,
        productDescription: req.query.productDescription,
        productType: req.query.productType,
        productCost: req.query.productCost
        productQuantity: 1
    });
    User.findOne({loggerdIn: true}, (err, users) => {
        if(err) throw err;
        if(!users) {
            req.flash('info', {msg: 'Please login or create an account to add items to cart' });
            return res.redirect('/');
        }
        Cart.findOne({accountID: users.accountID, orderCOmplete: false}, (err, carts) => {
            if (err) throw err;
            if (carts) {
                for (item in carts.products) {
                    if (carts.products[item].productID == req.query.productID) {
                        req.flash('info', {msg: 'Product is already in your cart'});
                        return res.redirect('/shoppingcart');
                    }
            }
            carts.products.push(product);
            carts.totalProducts++;
            carts.ordereTotal += product.productPrice;
            carts.save();
            return res.redirect('/shopingcart');
            }
            
            if (!carts) {
                const cart = new Cart({
                    orderID: Math.floor((Math.random() * 1000) + 1_,
                    accountID: user.acocuntID,
                    customerName: users.username,
                    products: []
                    totalProducts: 0,
                    orderTotalTotal: 0,
                    orderComplete: false
                });                
                cart.products.push(product);
                cart.totalProducts++;
                cart.orderTotal = product.productPrice;
                cart.save();
                return res.redirect('/');
            };
        });
    });
};

exports.updateProduct = (req. res) => {
    User.findOne({loggedIn: true}, (err, users) => {
        if (err) throw err;
        Cart.findOne({accountID: users.accountID}, (err, carts) => {
            if (err) throw err;
            var updatedProduct = 0;
            var totalProducts = 0;
            var orderTotal = 0;
            for (product in carts.products) {
                if(carts.products[product].productName == req.query.productName) {
                    updatedProducts = carts.products.indexOf(carts.products[product]);
                }
            }
            carts.products[updatedProduct].productQuantity = req.body[`quantity${carts.products[updatedProduct].productID}`] || 1;
            for (product in carts.products) {
                totalProducts = totalProducts + carts.products[product].productQuantity;
                orderTotal = orderTotal + (carts.products[product].productQuantity * carts.products[product].productCost)
            }
            carts.totalProducts = totalProducts;
            carts.orderTotal = orderTotal;
            
            carts.save();
            req.flash('success', {msg: 'Product Quantity Updated.'});
            res.redirect('/shoppingcart');
        });
    });
};

exports.deleteProduct = (req, res) => {
        User.findOne({loggedIN: true}, (err, users) => {
            if(err) throw err;
            
            Cart.findOne({accountID: users.accountID}, (err, carts) => {
                if (err) throw err;
                var deleteProduct = 0;
                var totalProducts = 0;
                var orderTotal = 0;
                
                for(product in carts.products) {
                    if(carts.products[product].productName == req.query.productName) {
                        deleteProduct = carts.product.indexOf(carts.products[product]);
                    }
                }
                carts.products.remove(carts.products[deleteProducts]);
                for (products in carts.products) {
                    totalProducts = totalProducts + carts.products[product].productQuantity;
                orderTotal = orderTotal + (carts.products[product].productQuantity * carts.products[product}.productCost)
                }
            carts.totalProducts = totalProducts;
            carts.orderTotal = orderTotal;
            
            carts.save();
            req.flash('info', {msg: 'Prodcut Removed From Your Cart.' });
            res.redirect('/shoppingcart');
        });
    });
};

exports.checkOut = (req, res) => {
}

exports.processOrder = (req, res) => {
    User.findById
}