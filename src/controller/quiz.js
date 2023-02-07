const {QuizModel} = require('../model/quiz')
const {responseResult} = require('../helper/response')
const {responseQuiz} = require('../helper/handleData')

class QuizControllerClass {
    async one (request, response){
        const items = await QuizModel.one(null);
        response.render('quiz', {items: items});
    }
    async list (request, response){
        const items = await QuizModel.list(null);
        response.send(responseResult.success(responseQuiz(items)));
    }

    async create (request, response){
        const items = await QuizModel.create(request.body);
        response.send({items: items});
    }
}
const QuizController = new QuizControllerClass();

module.exports = {QuizController}