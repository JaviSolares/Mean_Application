const express = require('express');
const router = express.Router();
const Monster = require('../modelos/pokemon');
const redis = require('redis');

var client = redis.createClient(process.env.PORT_REDIS, process.env.HOST_REDIS);

client.on('connect', function() {
    console.log('Connected to Redis..');
});

client.on('error', function() {
    console.log('Some error in connecting the redis cache');
});

router.get('/', function(req, res, next) {
    Monster.find({}).then(function(pokemones) {
        res.send(pokemones);
    });
});

router.get('/hello', function(req, res, next) {
    res.send('Hello World!');
});

router.get('/:id', function(req, res, next) {
    client.get(req.params.id, function(err, reply) {
        if (err) {
            next(null);
        } 
        /*else if (reply) {
            next(JSON.parse(reply));
        }*/
        else {
            Monster.findOne({ id: req.params.id }, 
                function(err, doc) {
                    if (err || !doc) {
                        next(null);
                    }
                    else {
                        client.set(req.params.id, JSON.stringify(doc));
                    }
                })
                .then(function(pokemon) {
                    res.send(pokemon);
                });
        }
    });
});

router.post('/', function(req, res, next) {
    Monster.create(req.body).then(function(pokemon) {
        res.send(pokemon);
    }).catch(next);
});

router.put('/:id', function(req, res, next) {
    Monster.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(function() {
            Monster.findOne({ id: req.params.id })
                .then(function(pokemon) {
                    res.send(pokemon);
                });
        });
});

router.delete('/:id', function(req, res, next) {
    Monster.findOneAndDelete({ id: req.params.id })
        .then(function(pokemon) {
            res.send(pokemon);
        });
});

getPokemonCached = function(collection, redis, id, callback) {
    redis.get(id, function(err, reply) {
        if (err) {
            callback(null);
        } 
        else if (reply) {
            callback(JSON.parse(reply));
        }
        else {
            collection.findOne({ id: id }, 
                function(err, doc) {
                    if (err || !doc) {
                        callback(null);
                    }
                    else {
                        redis.set(id, JSON.stringify(doc),
                        function() {
                            callback(doc);
                        });
                    }
                });
        }
    });
};

module.exports = router;