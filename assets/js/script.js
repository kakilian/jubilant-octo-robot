/* jshint esversion: 8 */

import {
    startTimer
} from './timer.js';

import {
    addPlayer,
    displayLeaderboard
} from './players.js';

import {
    questions
} from './questions.js';

console.log('font-family');
console.log('script loaded');
console.log('script.js');
console.log('players.js');
console.log('questions.js');
console.log('timer.js');

let key = 'Item'; {
    localStorage.setItem(key, 'Value, name, score');
};

let startButton, questionNumber, introductionContainer, controlsContainer, questionContainerElement, questionElement, corAnswerElement, incorAnswerElement, refreshButton, restartButton, resultsContainer, followingButton;

let answerButton1;
let answerButton2;
let answerButton3;
let answerButton4;

let currentQuestionIndex;
let score = 0;
let currentQuestionIndexToDisplay = 1;
let shuffledQuestions = [];
let correctQuestionIndex = -1

let timerDuration = 120;
let timerElement;
let timeInterval;

/**
 * Initialize DOM Components
 */
function initializeDomComponents() {
    startButton = document.getElementById('start-btn-front');
    questionNumber = document.getElementById('question-number');
    introductionContainer = document.getElementById('introduction-container');
    followingButton = document.getElementById('following-btn');
    controlsContainer = document.getElementById('controls-container');
    questionContainerElement = document.getElementById('question-container');
    questionElement = document.getElementById('question');
    corAnswerElement = document.getElementById('cor-answer');
    incorAnswerElement = document.getElementById('incor-answer');
    refreshButton = document.getElementById('start-btn-quiz');
    restartButton = document.getElementById('refresh-quiz');
    resultsContainer = document.getElementById('end-score-spieler');
    timerElement = document.getElementById('timer-display');
    answerButton1 = document.getElementById('answer-btn-1');
    answerButton2 = document.getElementById('answer-btn-2');
    answerButton3 = document.getElementById('answer-btn-3');
    answerButton4 = document.getElementById('answer-btn-4');
    answerButton1.addEventListener('click', () => handleAnswerClick(0));
    answerButton2.addEventListener('click', () => handleAnswerClick(1));
    answerButton3.addEventListener('click', () => handleAnswerClick(2));
    answerButton4.addEventListener('click', () => handleAnswerClick(3));
}

/** 
 * Load the DOM, !Important
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeDomComponents();
    startButton.addEventListener('click', startGame);
    followingButton.addEventListener('click', () => {
        currentQuestionIndex++;
        currentQuestionIndexToDisplay++;
        questionNumber.innerText = currentQuestionIndexToDisplay;
        followingButton.classList.add('hide');
        setNextQuestion();
    });
    restartButton.addEventListener('click', () => {
        resultsContainer.classList.add('hide');
        introductionContainer.classList.remove('hide');
    });
    refreshButton.addEventListener('click', () => {
        questionContainerElement.classList.add('hide');
        introductionContainer.classList.remove('hide');
        refreshButton.classList.add('hide');
    });
});

/** 
 * Start the game by hiding the introduction and setting up the first question
 */
function startGame() {
    introductionContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    questionNumber.innerText = currentQuestionIndexToDisplay;
    score = 0;
    setQuestionContent(shuffledQuestions[currentQuestionIndex]);
    questionContainerElement.classList.remove('hide');
    followingButton.classList.remove('hide');
    setNextQuestion();

    if (timerElement) {
        startTimer(timerDuration, timerElement, endQuiz);
    } else {
        console.error('Timer element not found in the DOM');
    }
}

/**
 * Set Question Content
 * @param {*} question 
 * @returns 
 */
function setQuestionContent(question) {
    controlsContainer.classList.add('hide');
    corAnswerElement.classList.add('hide');
    incorAnswerElement.classList.add('hide');
    startButton.classList.add('hide');

    if (!question || !question.answers) {
        console.error('Invalid Question or questions is undefined:', question);
        return;
    }

    if (question.answers.length < 4) {
        console.error('Expect at least 4 answers, but got:', question.answers.length);
        return;
    }

    questionElement.innerText = question.question;
    answerButton1.innerText = question.answers[0].text;
    answerButton2.innerText = question.answers[1].text;
    answerButton3.innerText = question.answers[2].text;
    answerButton4.innerText = question.answers[3].text;

    /**
     * Looking for correct answer index 
     */
    correctQuestionIndex = question.answers.findIndex(answer => answer.correct === true);
}

/**
 * Setting next Question
 * @returns 
 */
function setNextQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        displayFinalScore();
        return;
    }
    setQuestionContent(shuffledQuestions[currentQuestionIndex]);
    questionContainerElement.classList.remove('hide');
    followingButton.classList.add('hide');
    controlsContainer.classList.remove('hide');
}

/**
 * Answer Handled with Answer Click, as above
 * @param {
 * } answerindex 
 */
function handleAnswerClick(answerindex) {
    if (answerindex === correctQuestionIndex) {
        score++;
        corAnswerElement.classList.remove('hide');
        incorAnswerElement.classList.add('hide');
        followingButton.classList.remove('hide');
    } else {
        corAnswerElement.classList.add('hide');
        incorAnswerElement.classList.remove('hide');
        followingButton.classList.remove('hide');
    }

    let x = 10;
    let finalScoreElement = document.getElementById('final-score');

    if (finalScoreElement) {
        finalScoreElement.innerHTML = (score === x) ? "Congratulations! You scored 10 out of 10" : `You scored ${score} out of 10 questions`;
    } else {
        console.error('Element with ID final-score not found.')
    }

    if (currentQuestionIndex >= shuffledQuestions.length) {
        endQuiz();
        clearInterval(timerDuration);
    } else {
        currentQuestionIndex++;
        currentQuestionIndexToDisplay++;
        questionNumber.innerText = currentQuestionIndexToDisplay;
        setNextQuestion();
    }
}
/**
 * Reset State for the Quiz
 */
function resetState() {
    followingButton.classList.add('hide');
    corAnswerElement.classList.add('hide');
    incorAnswerElement.classList.add('hide');
    refreshButton.classList.add('hide');
    startButton.classList.add('hide');
    setNextQuestion();
    //
}

/**
 * Display Final Score at the end of the Quiz
 */
function displayFinalScore() {
    questionContainerElement.classList.add('hide');
    resultsContainer.classList.remove('hide');
    followingButton.classList.remove('hide');
    restartButton.parentElement.classList.remove('hide');

    const finalScoreElement = document.getElementById('final-score');
    const finalMessageElement = document.getElementById('final-message');

    /**
     * To stop the Timer
     */
    clearInterval(timerDuration);

    document.getElementById('final-score').innerHTML = ('You scored `${score}` out of 10 questions');
    let playerName = prompt('Enter your name:');
    /**
     * To send score to local storage
     */
    let currentDate = new Date().toLocaleDateString();
    addPlayer(playerName, currentDate, score);

    if (finalScoreElement) {
        finalScoreElement.innerHTML = `You scored ${score} out of 10 questions`;
    } else {
        console.error('Final score element not found');
    }

    questionContainerElement.classList.add('hide');
    finalScoreElement.parentElement.classList.remove('hide');
    finalMessageElement.parentElement.classList.remove('hide');

    displayLeaderboard();
}

/**
 * Quiz End with Timer 'Call-back'
 */
function endQuiz() {
    clearInterval(timeInterval);
    displayFinalScore();
    resetState();
    if (questionContainerElement.classList.contains('hide') === false) {
        questionContainerElement.classList.add('hide');
        console.log('ifstatement');
    }
    restartButton.classList.remove('hide');
}