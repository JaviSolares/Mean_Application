process.env.PORT = process.env.PORT  || 5000;
process.env.HOST_MONGO = process.env.HOST_MONGO || 'mongodb://javisolares:Chimchar004@ds125198.mlab.com:25198/pokedex';
process.env.HOST_REDIS =  process.env.HOST_REDIS || 'redis';
process.env.PORT_REDIS = process.env.PORT_REDIS || 6379;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const redis = require('redis');

const app = express();

const router = require('./rutas/api');

mongoose.connect(process.env.HOST_MONGO);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected on port 27017');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.use(cors());

app.use(bodyParser.json());

app.use('/api/v1/pokemon', router);

app.listen(process.env.PORT, function() {
    console.log('Node server is running..');
});
