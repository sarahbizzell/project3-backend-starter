var express = require('express');
var router = express.Router();
const Instructor = require('../models').instructor
const Quiz= require('../models').quiz


/* GET users listing. */
router.get('/', function (req, res, next) {
  Instructor.findAll()
    .then(instructors => {
      res.json({ instructors })
    })
});
//find instructor by ID
router.get('/:id', (req, res) => {
    let foundInstructor = {}
    Instructor.findByPk(req.params.id, {
      include: [{ model: Quiz }]
    })
      .then(instructor => {
        res.json({ instructor })
      })
  })


// create instructor
router.post('/', function (req, res, next) {
  Instructor.create(req.body.newInstructor)
    .then(instructor=> {
      res.json({ instructor })
    })
});

// DELETE AN INSTRUCTOR
router.delete('/:id', (req, res) => {
    Instructor.destroy({ where: { id: req.params.id } })
      .then(() => {
        return Instructor.findAll()
      })
      .then(instructor => {
        res.json({ instructor })
      })
  })

//UPDATE AN INSTRUCTOR

router.put('/:id', (req, res) => {          // Works, but Why is it returning an empty object on postman??
    Instructor.update(req.body.updateInstructor, {
      where: { id: req.params.id }
    })
      .then(instructor => {
        res.json({ instructor })
      })
  })




module.exports = router;
