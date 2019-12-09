var express = require('express');
var router = express.Router();
// const Instructor = require('../models').instructor
// const Quiz= require('../models').quiz
const Question= require('../models').question


/* GET question */
router.get('/', function (req, res, next) {
  Question.findAll()
    .then(questions => {
      res.json({ questions })
    })
});
//find question by ID
// ONE question
router.get('/:id', (req, res) => {
    Question.findByPk(req.params.id)
      .then(question => {
        res.json({ question })
      })
  })


// create a question
router.post('/', function (req, res, next) {
  Question.create(req.body.newQuestion)
    .then(question=> {
      res.json({ question })
    })
});


// DELETE A question
router.delete('/:id', (req, res) => {
  Question.destroy({ where: { id: req.params.id } })
    .then(question => {
      res.json({ question})
    })
})




module.exports = router;