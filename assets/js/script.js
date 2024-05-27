
/* jshint esversion: 8 */
console.log('script loaded');
console.log('script.js');
console.log('index.js');
console.log(questions[0])
//let questions = {};
let correctAnswer = {};
let incorrectAnswers = {};
let key = 'Item'; {
    localStorage.setItem(key, 'Value, name, score')
    };

var startButton
var questionNumber 
var introductionContainer  
var nextButton 
var controlsContainer 
var questionContainerElement
var questionElement 
var answerButtonsElement
var correctAnswerElement
var incorrectAnswerElement 
var refreshButton
var restartButton 
var resultsContainer
var displayFinalScore

var answerButton1
var answerButton2
var answerButton3
var answerButton4



let currentQuestionIndex;
let score = 0;
let currentQuestionIndexToDisplay = 1;
let question = [];
let shuffledQuestions;
let correctQuestionIndex = -1


function initializeDomComponents(){
    startButton = document.getElementById('start-btn-front');
    questionNumber = document.getElementById('question-number');
    introductionContainer = document.getElementById('introduction-container');
    nextButton = document.getElementById('next-btn');
    controlsContainer = document.getElementById('controls-container');
    questionContainerElement = document.getElementById('question-container');
    questionElement = document.getElementById('question');
    answerButtonsElement = document.getElementById('answer-buttons');
    correctAnswerElement = document.querySelector('.correct-answer');
    incorrectAnswerElement = document.querySelector('.incorrect-answer');
    refreshButton = document.getElementById('start-btn-quiz');
    restartButton = document.getElementById('refresh-quiz');
    resultsContainer = document.querySelector('.results-container');
    displayFinalScore = document.getElementById('end-score');
    answerButton1 = document.getElementById('answer-btn-1');
    answerButton2 = document.getElementById('answer-btn-2');
    answerButton3 = document.getElementById('answer-btn-3');
    answerButton4 = document.getElementById('answer-btn-4');

    answerButton1.addEventListener('click', () => {
        // Check if answer is correct

        //if yes
    })
    answerButton2.addEventListener('click', () => alert(1 === correctQuestionIndex ? 'Your answer is correct' : 'Try again'))
    answerButton3.addEventListener('click', () => alert(2 === correctQuestionIndex ? 'Your answer is correct' : 'Try again'))
    answerButton4.addEventListener('click', () => alert(3 === correctQuestionIndex ? 'Your answer is correct' : 'Try again'))
    
}

/** 
 * DOM Loading
*/ 
document.addEventListener('DOMContentLoaded', () => {
    
    initializeDomComponents();
    startButton.addEventListener('click', startGame);

    // const introductionContainer = document.getElementById('introduction-container'); 
    // const questionContainerElement = document.getElementById('question-container');
    // introductionContainer.classList.remove('hide');
    // questionContainerElement.classList.add('hide');
    // nextButton.addEventListener.classList.add('hide');
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
    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    questionNumber.innerText = currentQuestionIndexToDisplay;
    score = 0;
    
    setQuestionContent(questions[currentQuestionIndex])
    
    questionContainerElement.classList.remove('hide');
    //etNextQuestion();
}

function setQuestionContent(question){

    questionElement.innerText = question.question
    answerButton1.innerText = question.answers[0].text;
    answerButton2.innerText = question.answers[1].text;
    answerButton3.innerText = question.answers[2].text;
    answerButton4.innerText = question.answers[3].text;
    
    correctQuestionIndex = question.answers.findIndex(answer => answer.correct === true)
}

function setNextQuestion () {
    const currentQuestionsShuffled = questions.sort(() => Math.random() -0.5).slice(0, 10);
    const correctAnswers = document.innerText('answers.true');
    if (correctAnswers) {
        button.dataset.correct = correct.answers;
        score++;
    } else {
        answers.classList.add('wrong');   
    }
    introductionContainer.classList.add('hide');
    showAnswer(shuffledAnswers[currentAnswersIndex]);
    nextButton.classList.remove('hide');
   resetState();
};

function resetState () {
    nextButton.classList.add('hide');
    correctAnswerElement.classList.add('hide');
    incorrectAnswers.classList.add('hide');
    setNextQuestion();
}

function results() {
    questionContainerElement.classList.add('hide');
    resultsContainerElement.classList.remove('hide');
    const endScoreElement = document.getElementById('end-score');

    endScoreElement.innerHTML =`You scored ${score} out of 10 questions}`;
       
    if (score === 10) {
        endScoreElement.innerHTML += `Congratulations! You did great!`;
    } else if (score < 10) {
        endScoreElement.innerHTML += `Cheshire out smarted you, better luck next time!`;
    }
    leaderboard();
}
function name () {
  leaderboard();
}
function leaderboard () {
 
}

function myTimer () {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec === -1) {
        clearInterval(time);
        alert("Time is almost up!",(''));
    }

}


function setupEventHandlers() {

}