var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
    res.render('events/event');
});

module.exports = router;