var express = require('express');
var router = express.Router();
const Instructor = require('../models').instructor

/* GET users listing. */
router.get('/', function (req, res, next) {
  Instructor.findAll()
    .then(instructors => {
      res.json({ instructors })
    })
});

router.post('/', function (req, res, next) {
  Instructor.create(req.body)
    .then(instructor=> {
      res.json({ instructor })
    })
});



module.exports = router;
