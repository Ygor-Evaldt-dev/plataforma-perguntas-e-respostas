const express = require('express');
const router = express.Router();
const Questions = require('./QuestionsModel');
const Responses = require('../responses/ResponsesModel');

router.get('/questions', (req, res) => {
  Questions.findAll({ raw: true, order:[
    ['id', 'DESC']
  ]}).then(questions => {
    res.render('pages/questions.ejs', {
      questions: questions
    });
  });
});

router.get('/question/:id', (req, res) => {
  const id = req.params.id;
  Questions.findOne({
    where: {id: id}
  }).then(question =>{
    if (question != undefined) {
      Responses.findAll({
        where: {
          question_id: id
        }
      }).then((responses) => {
        res.render('pages/details_question.ejs', {
          question: question,
          responses: responses
        });
      });
    } else {
      res.redirect('/questions');
    }
  })
});

router.get('/to_ask', (req, res) => {
  res.render('pages/to_ask.ejs');
});

router.post('/save_question', (req, res) => {
  const question = {
    title: req.body.title,
    description: req.body.description
  }
  Questions.create({
    title: question.title,
    description: question.description
  }).then(() => {
    res.redirect('/questions');
  });
});

module.exports = router;