var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/home', function(req, res, next) {
	res.render('home');
});

router.get('/labs/:target', function(req, res, next) {
	var target = req.params.target;
	res.render('labs/' + target, {
		title: 'Express'
	});
});

module.exports = router;