const Product = require(".../models/Products");
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  Products.find({},(err,products) => {
      if (err) throw err;
      console.log(product);
      res.render('home',{ product: product })
  });
}  
