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
  Product.find({})
    .then((allProducts) =>
      res.json(allProducts)
    )
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
    });
}

module.exports.findOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(product => res.json(product))
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
    });
}

// module.exports.updateProduct = (req, res) => {
//   Product.findOneAndUpdate(
//     { _id: req.params.id },
//     req.body,
//     { new: true, runValidators: true }
//   )
//     .then(updatedProduct => res.json({ product: updatedProduct }))
//     .catch((err) => {
//         res.json({ message: 'Something went wrong', error: err })
//     });}



