const express = require('express');
const router = express.Router();
const Responses = require('./ResponsesModel');

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

module.exports = router;