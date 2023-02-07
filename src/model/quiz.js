const { db } = require("../helper/databse")

const QuizModel = {
  one: async function(params) {
    try {
      var results = await db.from('question').select("*")
      return results
    } catch (err) {
      return null;
    }
  },

  list: async function(params) {
    try {
      var results = await db.select("question.id", "question.name", "answer_option.id as ans_op_id", "answer_option.value as ans_op_value", "answer.id as answer_id", "answer.value as answer_value").from('question').innerJoin('answer_option', 'question.id', 'answer_option.question_id').innerJoin('answer', 'question.id', 'answer.question_id')
      return results
    } catch (err) {
      return null;
    }
  },
  create: async function(input){
    try {
      var question_id = await db.into('question').insert({name: input.name})
      const fieldsToInsert = input.option.map(option => ({value: option, question_id}));
      await db.into('answer_option').insert(fieldsToInsert)
      await db.into('answer').insert({value: input.answer, question_id})
      return  true
    } catch (err){
      return null
    }
  }
}

module.exports = {QuizModel}