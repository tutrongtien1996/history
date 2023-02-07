import {questionData} from "./storage/quiz.js";

let index = 0
async function getQuestions(){
    try {
      const response = await axios.get('/quiz/list');
      questionData.setQuestion(response.data.data)
    } catch (error) {
      console.error(error);
    }
    renderQuestion()
}
getQuestions()

document.querySelector('#next').onclick = () => {
  index += 1;
  renderQuestion()
}

function renderQuestion(){
  let contentElement = document.querySelector('.content-option')
  let innerOption = ''
  document.querySelector('h3').innerText = JSON.parse(localStorage.getItem('questions'))[index].name;
  questionData.getQuestion()[index].answer_option.forEach(option => {
    innerOption += `<input type="radio" id="option-${option.id}" name="value" value="${option.value}">
              <label for="option-${option.id}" class="h6 ms-2">${option.value}</label></br>`
  });
  contentElement.dataset.answer = JSON.stringify(JSON.parse(localStorage.getItem('questions'))[index].answer)
  contentElement.innerHTML = innerOption;
  answerCheck()
}

function answerCheck(){
  let optionElements = document.querySelectorAll('input[name="value"]');
  optionElements.forEach(element => {
    element.onclick = () => {
      let answer = JSON.parse(document.querySelector('.content-option').getAttribute('data-answer'))
      checkResult(answer.value)
    }
  })
}

function checkResult(correctAnswer) {
  let optionElements = document.querySelectorAll('input[name="value"]');
  optionElements.forEach(element => {
    console.log(correctAnswer, "===========", element.value)
    if (correctAnswer == element.value) {
      element.nextElementSibling.style.color = "green"
    } else if(element.checked) {
      element.nextElementSibling.style.color = "rgb(191, 7, 7)"
    } else {
      element.nextElementSibling.style.color = ""
    }
  })
}



