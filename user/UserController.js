const express = require('express');
const router = express.Router();
const Questions = require('../questions/QuestionsModel');

router.get('/', (req, res) => {
  res.render('pages/home.ejs');
});

router.get('/delete/:id', (req, res) => {
  Questions.destroy({where: {'id': req.params.id}}).then(() => {
    res.redirect('/questions');
  }).catch(() => {
    res.redirect('/error');
  });
});

module.exports = router;