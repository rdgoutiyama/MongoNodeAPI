var express = require('express');
var router = express.Router();
var _dog = require('../controllers/dogs');

/* GET home page. */
router.get('/', function(req, res) {
  _dog.retrieve(req,res);
});

router.post('/', function(req, res) {
  _dog.create(req,res);
});

router.put('/:id', function(req, res) {
  _dog.update(req,res);
});

module.exports = router;