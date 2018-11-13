const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('get route tested.');
});

router.get('/:id', function(req, res, next) {

});

router.post('/add-new', function(req, res, next) {

});

router.put('/update-data/:id', function(req, res, next) {

});

router.delete('/delete-data/:id', function(req, res, next) {

});

module.exports = router;