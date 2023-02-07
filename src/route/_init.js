
const { HomeRouter } = require("./home")
const { QuizRouter } = require("./quiz")

const _initRoute = function (app) {
  app.use('/', HomeRouter)
  app.use('/quiz', QuizRouter)
}

module.exports = {_initRoute}