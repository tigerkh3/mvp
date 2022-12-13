// server file
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/index.html'));


app.listen(port, function() {
  console.log(`My app is listening on ${port}`);
})