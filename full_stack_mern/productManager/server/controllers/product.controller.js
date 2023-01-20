const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
  response.json({
      message: "This the Product Manager API."
  });
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      res.json({ products: allProducts })
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
    });
}
