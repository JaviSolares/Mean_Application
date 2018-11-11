const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const router = require('./rutas/api');

mongoose.connect('mongodb://localhost/pokedex');

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected on port 27017');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.use(cors());

app.use(bodyParser.json());

app.use('/api/v1/pokemon', router);

app.listen(5000, function() {
    console.log('Node server is running..');
});
