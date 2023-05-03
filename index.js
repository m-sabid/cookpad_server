const express = require('express');
const chefsData = require('./data/chefs.json');

const app = express();

// Define a route to serve the chefs data
app.get('/', (req, res) => {
res.send("i am sabid")
}

app.get('/api/chefs', (req, res) => {
  res.send("kuttar baccga")
  res.json(chefsData);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
