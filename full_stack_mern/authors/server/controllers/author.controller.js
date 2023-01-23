const { Author } = require("../models/author.model");
const { 
  createAuthor,
  getAllAuthors,
  getAuthorById,
  deleteAuthorById,
  updateAuthorById,
} = require("../services/author.service");

const handleCreateAuthor = async (req, res) => {
  try {
    const newAuthor = await createAuthor(req.body);
    return res.json(newAuthor);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleGetAllAuthors = async (req, res) => {
  const authors = await getAllAuthors();
  return res.json(authors);
};

const handleGetAuthorById = async (req, res) => {
  const author = await getAuthorById(req.params.id);
  return res.json(author);
};

const handleDeleteAuthorById = async (req, res) => {
  try {
    const deletedAuthor = await deleteAuthorById(req.params.id);
    return res.json(deletedAuthor);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const handleUpdateAuthorById = async (req, res) => {
  try {
    const updatedAuthor = await updateAuthorById(
      req.params.id,
      req.body,
      {
        // re-run our validations
        runValidators: true,  
      }
    );
    return res.json(updatedAuthor);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  handleCreateAuthor,
  handleGetAllAuthors,
  handleGetAuthorById,
  handleDeleteAuthorById,
  handleUpdateAuthorById,
};
