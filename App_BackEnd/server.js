const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/pokedex');

app.use(cors());

app.listen(5000, function() {
    console.log('Node server is running..');
});
