// server file
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
const axios = require('axios');

app.use(express.static('src/dist'));
// need a body parser for our json type to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// yelp api key

var BEARER_TOKEN = 'Y12JAwBc6a1bcBeWRN5UjjGftm_pBomtOmC0u-Q9gMkE46Ih1XdUJNIXxsT5U9lNt6VOwbxk-G2Sb9LVZhsrOg80a6eybhpLCvnNWc5ieonfJuUdzOl1o8NkR8abY3Yx';

// express routers here

// GET method here


// POST method here
app.post('/getfoods', (req, res) => {

  // req.body.name gives us the type of food we want to search for
  // make a get request to Yelp API!
  // looks like this from the shell
  // GET https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972
  var category = req.body.name.toLowerCase();
  // use my own latitude and longitude for my own usage
  var loc = 'Orange County';

  var randomOffset = function () {
    return Math.floor(Math.random() * (1000 - 0))
  }

  var offsetVal = randomOffset();
  var yelpURL = 'https://api.yelp.com/v3/businesses/search'
  var options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${BEARER_TOKEN}`,
      'Content-Type': 'application/json'
    },
    params: {
      term: category,
      location: loc,
      offset: randomOffset(),
      limit: '50'
    }
  }

  axios.get(yelpURL, options)
    .then( (result) => {
      var result = result.data.businesses
      // relevant information is .name, and .url
      // our result gives us 50 random options
      // we can send this back to our client function
      return res.send(result)
    })



})


app.listen(port, function() {
  console.log(`My app is listening on ${port}`);
})