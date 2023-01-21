// imports Product variable exported from product.model.js
// Product is a constructor function that can create new product objects and has methods that can communicate with the db
const { Product } = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then((allProducts) => res.json(allProducts))
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.findOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong", error: err });
    });
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};
