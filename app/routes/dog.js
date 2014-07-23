var express = require('express');
var router = express.Router();
var _dog = require('../controllers/dogs');

/* GET home page. */
router.get('/', function(req, res) {
  _dog.retrieve(req,res);
});

module.exports = router;