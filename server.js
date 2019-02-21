/* eslint-disable quotes */
'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
const PORT = 8000;

console.log(process.env.API_TOKEN);

const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychich`, `Rock`, `Steel`, `Water`]

function handleGetTypes(req,res) {
  res.json(validTypes);
}

app.get('/types', handleGetTypes);

function handleGetPokemon(req,res) {
  res.send('Hello, Pokemon!');
}

app.get('/pokemon', handleGetPokemon);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
});