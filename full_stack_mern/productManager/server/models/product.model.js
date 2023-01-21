// imports mongoose so we can use its schemas to create models for our MongoDB collections
const mongoose = require('mongoose')
// creates schema for a new product that has a title, price, and description (all required)
// the object passed as a parameter into mongoose.Schema() details how each new document put into the collection will be formatted
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    price: { type: Number, required: [true, "Price is required"] },
    description: { type: String, required: [true, "Description is required"] }
  }, 
  { timestamps: true }
) // setting timestamps option to true adds two Date properties: createdAt & updatedAt

// mongoose.model() uses the blueprint object provided by the schema to create the necessary db collection with the model
// creates Product variable, which is is used to export the return the model object created using the singular version of the collection 'Product' and ProductSchema
// model enables CRUD functionality in any file where it's imported
// after creating the first document with the model, the collection 'products' will appear in the db
module.exports.Product = mongoose.model('Product', ProductSchema);