// imports express module
const express = require('express');
// imports cors module for cross-origin requests
const cors = require('cors');
// imports routes file
const { authorRouter } = require('./routes/author.routes');
// Environment vars
const PORT = 8000;
// invokes express
const app = express();

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Adds all the product routes with this url prepended to them.
// If we had another model, we'd do the same with that model's routes.
app.use('/api/authors', authorRouter)
// runs server on specified port (must be below other code blocks)
app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
})