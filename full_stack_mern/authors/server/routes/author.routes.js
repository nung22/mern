const express = require('express');

const { 
  handleGetAllAuthors,
  handleCreateAuthor,
  handleGetAuthorById,
  handleUpdateAuthorById,
  handleDeleteAuthorById 
} = require('../controllers/author.controller');

const router = express.Router();

router.get('/', handleGetAllAuthors);
router.post('/new', handleCreateAuthor);
router.get('/:id', handleGetAuthorById);
router.put('/:id', handleUpdateAuthorById);
router.delete('/:id', handleDeleteAuthorById);

module.exports =  { authorRouter: router }