console.log('script loaded');
console.log('script.js');

const startButton = document.getElementById('start-btn-front');
console.log(startButton)
const introductionContainer = document.getElementById('introduction-container')
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const correctAnswerElement = document.querySelector('.correct-answer');
const incorrectAnswerElement = document.querySelector('.incorrect-answer');
const refreshButton = document.getElementById('start-btn-quiz');
const restartButton = document.getElementById('refresh-quiz');
const resultsContainer = document.querySelector('.results-container');
const endScoreElement = document.getElementById('end-score');
let shuffledQuestions, currentQuestionIndex;
let score = 0

document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame);

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });

    restartButton.addEventListener('click', () => {
        resultsContainer.classList.add('hide');
        introductionContainer.classList.remove('hide');

    });

    refreshButton.addEventListener('click', () => {
        questionContainerElement.classList.add('class');
        introductionContainer.classList.remove('class');

    });
});

function startGame() {
    console.log("Start Game function started")
    introductionContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    console.log("Start Game function ENDED")
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

    // Resetting unnecessary elements and clearing previous answers //
function resetState() {
    nextButton.classList.add('hide');
    correctAnswerElement.classList.add('hide');
    incorrectAnswerElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

    //After an answer is selected, will update score and display results //
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
    });
    if (correct) {
        correctAnswerElement.classList.remove('hide');
        score++;
    } else {
        incorrectAnswerElement.classList.remove('hide');
        }
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            showResults();
        }
}

    // Is the Answer Correct or wrong //

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
    //To remove elements on page, after use //

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResults() {
    questionContainerElement.classList.add('hide');
    resultsContainer.classList.remove('hide');
    displayFinalScore();
}
function displayFinalScore() {
    endScoreElement.innerText = `You scored ${score} out of ${questions.length}`;
    const finalScoreContainer = document.querySelector(`.final-score-container`);
    finalScoreContainer.innerHTML = `
        <P>Your final score is: ${score}</P>
        <p>${score >= 8 ? 'Congratulations! You did great!' : 'Cheshire out smarted you, better lucky next time!'}</p>
    `;
}