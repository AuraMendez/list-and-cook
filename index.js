const express = require('express')
const app = express()
const port = process.env.PORT || 5002
const path = require('path');
const bodyParser = require('body-parser');
const recipes = require('./db/recipes.json').recipes;
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json());


// Rest API 
app.get('/api/recipes', (req, res) => {
  res.send(recipes);
});

app.get('/api/recipes/index/:i', (req, res) => {
  const recipeByIndex = recipes[req.params.i];
  res.send(recipeByIndex);
});

app.get('/api/recipes/id/:id', (req, res) => {
  const recipeById = recipes.filter(recipe => recipe.id === req.params.id);
  res.send(recipeById[0]);
});

app.get('/api/recipes/tag/:tag', (req, res) => {
  const recipesByTag = recipes.filter(recipe => recipe.tags.includes(req.params.tag));
  res.send(recipesByTag);
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

//Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
