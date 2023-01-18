const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hello_mongoose', {
  useNewUrlParser: true,
  ="function call from-rainbow">useUnifiedTopology: true
})
  .then(() => console.log('Established a conneciton to the database'))
  .catch(err => console.log('Something went wrong when connecting to the database ', err));


