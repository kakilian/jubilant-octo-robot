/* jshint esversion: 8 */

import {
    displayLeaderboard,
    addPlayer
} from './players.js';
import {
    questions
} from './questions.js';

console.log('script loaded');
console.log('script.js');
console.log('players.js');
console.log('questions.js');

let correctAnswers = {};
let incorrectAnswers = {};
let key = 'Item'; {
    localStorage.setItem(key, 'Value, name, score');
};

let startButton;
let questionNumber;
let introductionContainer;
let nextButton;
let controlsContainer;
let questionContainerElement;
let questionElement;
let answerButtonsElement;
let correctAnswerElement;
let wrongAnswerElement;
let refreshButton;
let restartButton;
let resultsContainer;
//let displayFinalScore

let answerButton1;
let answerButton2;
let answerButton3;
let answerButton4;

let currentQuestionIndex;
let score = 0;
let currentQuestionIndexToDisplay = 1;
let question = [];
let shuffledQuestions = [];
let correctQuestionIndex = -1

function initializeDomComponents() {
    startButton = document.getElementById('start-btn-front');
    questionNumber = document.getElementById('question-number');
    introductionContainer = document.getElementById('introduction-container');
    nextButton = document.getElementById('next-btn');
    controlsContainer = document.getElementById('controls-container');
    questionContainerElement = document.getElementById('question-container');
    questionElement = document.getElementById('question');
    answerButtonsElement = document.getElementById('answer-buttons');
    correctAnswerElement = document.getElementById('correct-answer');
    wrongAnswerElement = document.getElementById('incorrect-answer');
    refreshButton = document.getElementById('start-btn-quiz');
    restartButton = document.getElementById('refresh-quiz');
    resultsContainer = document.getElementById('.results-container');
    //displayFinalScore = document.getElementById('end-score');

    answerButton1 = document.getElementById('answer-btn-1');
    answerButton2 = document.getElementById('answer-btn-2');
    answerButton3 = document.getElementById('answer-btn-3');
    answerButton4 = document.getElementById('answer-btn-4');

    answerButton1.addEventListener('click', () => alert(0 === correctQuestionIndex ? 'Your answer is correct' : 'Incorrect'))
    answerButton2.addEventListener('click', () => alert(1 === correctQuestionIndex ? 'Your answer is correct' : 'Incorrect'))
    answerButton3.addEventListener('click', () => alert(2 === correctQuestionIndex ? 'Your answer is correct' : 'Incorrect'))
    answerButton4.addEventListener('click', () => alert(3 === correctQuestionIndex ? 'Your answer is correct' : 'Incorrect'))
}

/** 
 * DOM Loading
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeDomComponents();
    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        currentQuestionIndexToDisplay++;
        questionNumber.innerText = currentQuestionIndexToDisplay;
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

});

/** 
 * Start the game by hiding the introduction and setting up the first question
 */
function startGame() {
    introductionContainer.classList.add('hide');
    console.log('question,', question)
    console.log('questions,', questions)
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    console.log('Shuffled Questions', shuffledQuestions)
    currentQuestionIndex = 0;
    questionNumber.innerText = currentQuestionIndexToDisplay;
    score = 0;
    console.log('Before set question')
    setQuestionContent(shuffledQuestions[currentQuestionIndex]);
    console.log('After set question')
    questionContainerElement.classList.remove('hide');
    // controlsContainer.classList.remove('hide');

    setNextQuestion();
}

function setQuestionContent(question) {
    //questionElement.innerText = question.question
    // Debug log to check the recieved question object
    controlsContainer.classList.add('hide');
    console.log('Recieved question:', question);
    // Check if the question object answers array is valid
    if (!question || !question.answers) {
        console.error('Invalid Question or questions is undefined:', question);
        return;
    }

    // Question length with array - is correct?
    //if (question.answers.length < 4) {
    //    console.error('Expect at least 4 answers, but got:', question.answers.length); 
    //    return;
    //}

    questionElement.innerText = question.question;
    answerButton1.innerText = question.answers[0].text;
    answerButton2.innerText = question.answers[1].text;
    answerButton3.innerText = question.answers[2].text;
    answerButton4.innerText = question.answers[3].text;

    // Looking for correct answer index 
    correctQuestionIndex = question.answers.findIndex(answer => answer.correct === true);

}

function setNextQuestion() {
    console.log('setNextQuestion')
    if (currentQuestionIndex >= shuffledQuestions.length) {
        displayFinalScore();
        return;
    }
    console.log('finalScore');
    setQuestionContent(shuffledQuestions[currentQuestionIndex]);
    questionContainerElement.classList.remove('hide');
    nextButton.classList.add('hide');
    controlsContainer.classList.remove('hide');

//const currentQuestionsShuffled = question.sort(() => Math.random() -0.5).slice(0, 10);

//const correctAnswer = document.querySelector('answers').innerText === 'true';

//if (correctAnswers) {
//  correctAnswers.dataset.correct = correct.answer;
//score++;
//} else {
//  incorrectAnswers.answer.classList.add('wrong');
//}
//controlsContainer.classList.add('hide');
//showAnswer(shuffledAnswers[currentAnswersIndex]).innerText === true;


nextButton.classList.remove('hide');
}

function handleAnswerClick(answerindex) {
    if (answerindex === correctQuestionindex) {
        score++;
        correctAnswerElement.classList.remove('hide');
    } else {
        correctAnswerElement.classList.add('hide');
        wrongAnswerElement.classList.remove('hide');


nextButton.classList.remove('hide');

//   }   
//    let x = 10;
//  document.getElementById('final-score').innerHTML = (x === 10);
//displayFinalScore('endScore');
// console.log('hello here I am');
//} else {
    resetState();
//};
}

function resetState() {
    nextButton.classList.add('hide');
    correctAnswerElement.classList.add('hide');
    incorrectAnswers.classList.add('hide');
    setNextQuestion();
}

function displayFinalScore() {
    questionContainerElement.classList.add('hide');
    resultsContainer.classList.remove('hide');
    document.getElementById('final-score').innerHTML = `You scored ${score} out of 10 questions}`;
    let playerName = prompt('Enter your name:');
    let currentDate = new Date().toLocaleDateString();
    addPlayer(playerName, currentDate, score);

    if (score === 10) {
        document.getElementById('end-score').innerHTML += `Congratulations! You did great!`;
    } else {}
    document.getElementById('end-score').innerHTML += `Cheshire out smarted you, better luck next time!`;
}

displayLeaderboard();
}