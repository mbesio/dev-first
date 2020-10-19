const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//middleware - body parser middleware, need to better understand what this does
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});