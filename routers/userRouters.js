const express = require('express');
const router = express.Router();
// Models
const Questions = require('../database/Questions');
const Responses = require('../database/Responses');

// get routers
router.get('/', (req, res) => {
  res.render('pages/home.ejs');
});

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
})

router.get('/delete/:id', (req, res) => {
  Questions.destroy({where: {'id': req.params.id}}).then(() => {
    res.redirect('/questions');
  }).catch(() => {
    res.redirect('/error');
  });
});

router.get('/to_ask', (req, res) => {
  res.render('pages/to_ask.ejs');
});

// post routes
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

router.post('/answer', (req, res) => {
  const response = {
    body: req.body.response,
    question_id: req.body.question_id
  };
  Responses.create({
    body: response.body,
    question_id: response.question_id
  }).then(() => {
    res.redirect(`/question/${response.question_id}`);
  });
});

router.get('*', (req, res) => {
  if(res.status(404)) {
    res.render('pages/error.ejs');
  }
});

module.exports = router;