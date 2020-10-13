const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) throw err;
        res.render('products/allproducts', {products})
    });
}

exports.getRefrigerator = (req, res) => {
    Product.find({productType: 'Refrigerator'}, (err, products) => {
        if (err) throw err;
        res.render('products/refrigerators', {products})
    });
}

exports.getStove = (req, res) => {
    Product.find({productType: 'Stove'}, (err, products) => {
        if (err) throw err;
        res.render('products/stoves', {products})
    });
}

exports.getMicrowave = (req, res) => {
    Product.find({productType: 'Microwave'}, (err, products) => {
        if (err) throw err;
        res.render('products/microwaves', {products})
    });
}