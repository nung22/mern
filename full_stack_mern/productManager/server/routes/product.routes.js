const express = require('express');

const { 
  findAllProducts,
  createProduct,
  findOneProduct,
  updateProduct,
  deleteProduct 
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/', findAllProducts);
router.post('/new', createProduct);
router.get('/:id', findOneProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports =  { productRouter: router }