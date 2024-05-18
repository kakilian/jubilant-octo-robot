console.log('script loaded')
console.log('script.js')

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn-front');
    const nextButton = document.getElementById('next-btn');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const controlsContainer= document.getElementById('controls-container');
    const correctAnswerElement = document.querySelector('.correct-answer');
    const incorrectAnswerElement = document.querySelector('.incorrect-answer');
    const refreshButton = document.getElementById('start-btn-quiz');
    const restartButton = document.getElementById('refresh-quiz');
    const resultsContainer = document.querySelector('.results-container');  
    const endScoreElement = document.getElementById('end-score');

let shuffledQuestions, currentQuestionIndex;
let score = 0
    
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButtonFront.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

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

function resetState() {
    nextButton.classList.add('hide');
    correctAnswerElement.classList.add('hide');
    incorrectAnswerElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//Array usage to keep //
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

//score, final score //

function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
    }
}

function displayFinalScore() {
    const finalScoreContainer = document.createElement('div');
    finalScoreContainer.classList.add('final-score');

    const scoreText = document.createElement('p');
    scoreText.textContent = `Your final score is: ${score}`;
    finalScoreContainer.appendChild(scoreText);


    const resultText =document.createElement('p');
    if (score >= 5) {
        resultText.textContent = "Congratulations! You did great!";
    } else {
        resultText.textContent = "Cheshire Cat out smarted you, better luck next time!";
    }
    finalScoreContainer.appendChild(resultText);

    document.body.appendChild(finalScoreContainer);
});
