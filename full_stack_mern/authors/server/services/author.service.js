const { Author } = require("../models/author.model");

const createAuthor = async (data) => {
  const author = await Author.create(data);
  return author;
};

const getAllAuthors = async () => {
  const authors = await Author.find();
  return authors;
};

const getAuthorById = async (data) => {
  const author = await Author.findById(data);
  return author;
};

const deleteAuthorById = async (data) => {
  const deletedAuthor = await Author.findByIdAndDelete(data);
  return deletedAuthor;
};

const updateAuthorById = async (data) => {
  const updatedAuthor = await Author.findByIdAndUpdate(data);
  return updatedAuthor;
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  deleteAuthorById,
  updateAuthorById,
};