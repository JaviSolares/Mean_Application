const express = require('express');
const router = express.Router();
const Monster = require('../modelos/pokemon');

router.get('/', function(req, res, next) {
    Monster.find({}).then(function(pokemones) {
        res.send(pokemones);
    });
});

router.get('/:id', function(req, res, next) {
    Monster.findOne({ id: req.params.id })
        .then(function(pokemon) {
            res.send(pokemon);
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

module.exports = router;