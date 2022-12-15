// server file
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('src/dist'));
// need a body parser for our json type to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))




// express routers here

// GET method here


// POST method here
app.post('/getfoods', (req, res) => {

  // here we need to use req.body
  console.log('post hit and working');
})


app.listen(port, function() {
  console.log(`My app is listening on ${port}`);
})