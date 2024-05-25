/* jshint esversion: 8 */
console.log('script loaded');
console.log('script.js');
/**
 *  Define and log key DOM elements
 */
const startButton = document.getElementById('start-btn-front');
const questionNumber = document.getElementById('question-number');
const introductionContainer = document.getElementById('introduction-container');
const nextButton = document.getElementById('next-btn');
const controlsContainer = document.getElementById('controls-container');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const correctAnswerElement = document.querySelector('.correct-answer');
const incorrectAnswerElement = document.querySelector('.incorrect-answer');
const refreshButton = document.getElementById('start-btn-quiz');
const restartButton = document.getElementById('refresh-quiz');
const resultsContainer = document.querySelector('.results-container');
const displayFinalScore = document.getElementById('end-score');


let currentQuestionIndex;
let score = 0;
let currentQuestionIndexToDisplay = 1;
let question = [];
let shuffledQuestions;

/**
* Inititalize event listeners after the DOM content is loaded
*/
document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame);

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        currentQuestionIndexToDisplay++;
        questionNumber.innerText = currentQuestionIndexToDisplay;
        console.log('setNext Question');
        nextButton.classList.add('hide');
        setNextQuestion();
});

    restartButton.addEventListener('click', () => {
        resultsContainer.classList.add('hide');
        introductionContainer.classList.remove('hide');
    });

    refreshButton.addEventListener('click', () => {
        questionContainerElement.classList.add('hide');
        introductionContainer.classList.remove('hide');
    });

    displayFinalScore.addEventListener('click', () => {
        resultsContainer.classList.remove('hide');
        introductionContainer.classList.add('hide');
    });
});

/** 
 * Start the game by hiding the introduction and setting up the first question
*/
function startGame() {
    introductionContainer.classList.add('hide');
    shuffledQuestions = questions.sort => Math.random() - 0.5;
    currentQuestionIndex = 0;
    questionNumber.innerText = currentQuestionIndexToDisplay;
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

/**
* Set up next question in the quiz
*/
function setNextQuestion() {
    resetState();
    question = shuffledQuestions[currentQuestionIndex];
    showQuestion(question);
    controlsContainer.classList.remove('hide');
}
  
/**
* Display the question and its answers
* @param {Object} question - The question objects to display 
*/
function showQuestion(question) { 
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        //const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

/**
* Reset the state of the quiz interface
*/ 
function resetState() {
    //nextButton.style.display = 'none';
    nextButton.classList.add('hide');
    correctAnswerElement.classList.add('hide');
    incorrectAnswerElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
/**
* Handle the selection of an answer
* @para {Event} e - The event object
*/
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        correctAnswerElement.classList.remove('hide');
        score++;
    } else {
        incorrectAnswerElement.classList.remove('hide');
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add('hide');
        setStatusClass (button, button.dataset.correct === 'true');
    });
    //button.disabled = true;
};
    //nextButton.style.display = "block";

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
        controlsContainer.classList.remove('hide');
    } else {
        showResults();
    }
/**
* Set the status class on a element based on whether the answer is correct
* @param {Element} element - THe DOM element to set the class on
* @param {boolean} correct - Whether the answer is correct 
*/
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
* Clear the status class from an element
* @param {Element} element - THe DOM element to clear the class from  
*/
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
* Show the final results of the quiz
*/
function showResults() {
    questionContainerElement.classList.add('hide');
    resultsContainer.classList.remove('hide');
    const endScoreElement = document.getElementById('end-score');
    
    endScoreElement.innerText = `You scored ${score} out of 10 questions}`;
    const finalScoreContainer = document.querySelector(`.final-score-container`);
    finalScoreContainer.innerHTML = `
        <P>Your final score is: ${score}</P>
        <p>${score === 10 ? 'Congratulations! You did great!' : 'Cheshire out smarted you, better lucky next time!'}</p>
    `;
          
}

startGame ()