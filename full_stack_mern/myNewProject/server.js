const express = require('express');
const app = express();
require('./server/routes/person.routes')(app);
const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));