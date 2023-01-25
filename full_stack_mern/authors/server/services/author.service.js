const { Author } = require("../models/author.model");

const createAuthor = async (data) => {
  const author = await Author.create(data);
  return author;
};

const getAllAuthors = async () => {
  const authors = await Author.find();
  return authors;
};

const getAuthorById = async (authorId) => {
  const author = await Author.findById(authorId);
  return author;
};

const deleteAuthorById = async (authorId) => {
  const deletedAuthor = await Author.findByIdAndDelete(authorId);
  return deletedAuthor;
};

const updateAuthorById = async (authorId, data) => {
  const updatedAuthor = await Author.findByIdAndUpdate(authorId, data, 
      {
        // re-run our validations
        runValidators: true,  
      }
      );
  return updatedAuthor;
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  deleteAuthorById,
  updateAuthorById,
};