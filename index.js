require('dotenv').config();

const path = require('path');
const express = require('express');
const router = require('./app/router');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './integration')));

app.use(router);

app.listen(port,() => {
  console.log(`http://localhost:${port}`);
});