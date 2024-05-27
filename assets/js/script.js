console.log('script loaded');
console.log('script.js');
console.log('index.js');

let questions = {};
let correctAnswer = {};
let incorrectAnswers = {};
/** 
 * DOM Loading
*/ 
document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame);
    const introductionContainer = document.getElementById('introduction-container'); 
    const startButton = document.getElementById('start-btn-front');
    const questionContainerElement = document.getElementById('question-container');
    introductionContainer.classList.remove('hide');
    questionContainerElement.classList.add('hide');
    nextButton.addEventListener.classList.add('hide');
    setNextQuestion();
});

function startGame () {
    introductionContainer.classList.add('hide');
    currentQuestions = questions.sort(() => Math.random() -0.5).slice(0, 10);
    currentQuestionsIndex = 0;
    score = 0;   
    questionContainerElement.classList.remove('hide');
    setNextQuestion ();
}

function setNextQuestion () {
    introductionContainer.classList.add('hide');
    showAnswer(shuffledAnswers[currentAnswersIndex]);
    resetState();
}

function resetState () {
    nextButton,classList.add('hide');
    correctAnswerElement.classList.add('hide');
    incorrectAnswers.classList.add('hide');
}

function showAnswer () {


}

function results() {

}