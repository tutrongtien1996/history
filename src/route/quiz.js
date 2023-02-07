const express = require('express');
const { QuizController } = require('../controller/quiz.js');

const QuizRouter = express.Router();
QuizRouter.get('/',  QuizController.one)
QuizRouter.get('/list',  QuizController.list)
QuizRouter.post('/',  QuizController.create)
module.exports = {QuizRouter}