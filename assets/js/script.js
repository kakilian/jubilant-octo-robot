console.log('script loaded')
console.log('script.js')


const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const hideElements = document.getElementById('hide');

let shuffledQuestions, currentQuestionIndex;
let score = 0
    
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
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
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//Array usage to keep //
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    updateScore(correct === "true");
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
}   else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    displayFinalScore();
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
}