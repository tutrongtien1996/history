function responseQuiz(inputs){
    let outputs = []
    let item = {}

    let question_id = Array.from(new Set(inputs.map(input => input.id)))
    question_id.map(element => {
        let arr = inputs.filter(item => element == item.id)
        let output = {
            id: arr[0].id,
            name: arr[0].name,
            answer: {id: arr[0].answer_id, value: arr[0].answer_value},
        }
        function answerOption(item){
            return {id: item.ans_op_id, value: item.ans_op_value}
        }
        output.answer_option = arr.map(element => answerOption(element))

        outputs.push(output)
    })
    return outputs
    
}

module.exports = {responseQuiz}

