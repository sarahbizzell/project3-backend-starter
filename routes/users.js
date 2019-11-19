var express = require('express');
var router = express.Router();
const User = require('../models').User

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.findAll()
    .then(users => {
      res.json({ users })
    })
});

router.post('/', function (req, res, next) {
  User.create(req.body)
    .then(user => {
      res.json({ user })
    })
});



module.exports = router;
