var express = require('express');
var router = express.Router();
const Instructor = require('../models').instructor
const Quiz= require('../models').quiz
const Question= require('../models').question


/* GET quiz listing. */
router.get('/', function (req, res, next) {
  Quiz.findAll()
    .then(quizzes => {
      res.json({ quizzes })
    })
});
//find quiz by ID
router.get('/:id', (req, res) => {
    let foundQuizzes= {}
    Quiz.findByPk(req.params.id, {
      include: [{ model: Question }]
    })
      .then(question => {
        res.json({ question })
      })
  })

// create quiz
router.post('/', function (req, res, next) {
  Quiz.create(req.body.newQuiz)
    .then(quiz => {
      res.json({ quiz })
    })
});


// DELETE A QUIZ
router.delete('/:id', (req, res) => {
    Quiz.destroy({ where: { id: req.params.id } })
    .then(quiz => {
      res.json({ quiz })
    })
      
  })





module.exports = router;