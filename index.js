const express = require("express");
const chefsData = require("./data/chefs.json");
const recipesData = require("./data/recipes.json");

const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/chefs", (req, res) => {
  res.send(chefsData);
});

app.get("/api/recipes", (req, res) => {
  res.send(recipesData);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
