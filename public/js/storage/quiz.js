
const questionData = {
    setQuestion: function setQuestionData(data){
        localStorage.setItem('questions', JSON.stringify(data))
    },
    getQuestion: function getQuestionData(){
        return JSON.parse(localStorage.getItem('questions'))
    }
}

export { questionData };