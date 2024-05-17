console.log('script loaded')

const startButton = document.getElementById('start-btn-quiz');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
});

function startQuiz() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionindex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
};

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
            button.innerText = answer;
            button.classList.add('btn');
                if (answer === question.correctAnswer) {
                button.dataset.correct = true;
            };
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}

//Array usage to keep 
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    }) 
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
}   else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
}
}
// Correcr or wrong //

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else element.classList.add('wrong');
}
//To remove elements on page, after use //

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Questions //
const questions = [{
        question: "What is the scientific name for the domestic cat?",
        answers: ["Felis catus", "Meowicus purricus", "Furry maximus", "Whiserkells whiskerensis"],
        correctAnswer: "Felis catus",
    },
    {
        question: "What is the average span life of a cat?",
        answers: ["12 to 15 years", "20 to 25 years", "5 to 7 years", "30 to 35 years"],
        correctAnswer: "12 to 15 years",
    },
    {
        question: "A wivestales: How many lives does a cat have?",
        answers: ["1", "7", "13", "3"],
        correctAnswer: "7",
    },
    {
        question: "What is a group of cats called?",
        answers: ["A meow-meow crew", "A whisker-flock", "A clowder or a glaring", "A purr-fect party"],
        correctAnswer: "A clowder or a glaring",
    },
    {
        question: "What is the largest breed of domestic cat?",
        answers: ["Munckin", "Scottisch Fold", "Irish Love", "Maine Coon"],
        correctAnswer: "Maine Coon",
    },
    {
        question: "What is the cat's primary sense?",
        answers: ["Sense of hearing", "Sense of smell", "Sense of taste", "Sense of sight"],
        correctAnswer: "Sense of smell",
    },
    {
        question: "What is a cat's grooming behavior called?",
        answers: ["Fur-fluffing", "Pur-polishing", "Washing Whiskers", "Allogrooming or mutual grooming"],
        correctAnswer: "Allogrooming or mutual grooming",
    },
    {
        question: "What is the term for a femaile cat that hasn't been spayed?",
        answers: ["Duchess", "Lady", "Queen", "Empress"],
        correctAnswer: "Queen",
    },
    {
        question: "What is the name for a cat's retractable claws?",
        answers: ["Sharp-shooters", "Claw-flaws", "Retractile or protractile claws"],
        correctAnswer: "Retractile or protractile claws",
    },
    {
        question: "In Alice in Wonderland, ' What color is the Cheshire Cat?",
        answers: ["Green and blue dots", "pink and purple stripes", "orange and yellow swirls", " Black and white spots"],
        correctAnswer: "pink and purple stripes",
    },
    {
        question: "Finish the quote: 'We're all mad here ... '?",
        answers: [".. because cats rule!", ".. but that's what makes life interesting", ".. except for the teapot corner", ".. so lets have a tea party!"],
        correctAnswer: "All of the above",
    },
    {
        question: "What does the Cheshire Cat like to do in the story?",
        answers: ["It likes to tease and confuse Alice with his cryptic comments", "It likes to take long naps", "it loves to play chess with the Queen of Hearts!", "It enjoys baking cookies for the Mad Hatter's tea parties."],
        correctAnswer: "It likes to tease and confuse Alice with his cryptic comments",
    },
    {
        question: "What distinctive feature does the Cheshire Cat have?",
        answers: ["It can vanish, leaving only its grin visible", "It has glowing eyes", "It has wings", "it can talk to other animals"],
        correctAnswer: "It can vanish, leaving only its grin visible",
    },
    {
        question: "What does the Cheshire Cat's grin look like?",
        answers: ["A small, shy smile that never fades", "A wide, mischievous grin that floats in the air", "A cat toothy grin rainbow-colored teeth", " A sad grin with tears streaming down his face"],
        correctAnswer: "A wide, mischievous grin that floats in the air",
    },
    {
        question: "Who does the Cheshire Cat offer advice to in 'Alice in Wonderland?",
        answers: ["It gives advice to the White Rabbit", "It advises the March Hare", "It helps the Dormouse with riddles", "it offers advice and guidance to Alice"],
        correctAnswer: "it offers advice and guidance to Alice",
    },
    {
        question: "Where does the Cheshire Cat first appear in 'Alice in Wonderland?",
        answers: ["He first merges ..from a hole in the ground", "He appears ..sitting on a mushroom in the garden", "He appears ..in the Queen of Hearts' palace", "He first appears .. in the branch of a tree in the forest"],
        correctAnswer: "He first appears .. in the branch of a tree in the forest",
    },
    {
        question: "What happens to the Cheshire Cat's body in the story?",
        answers: ["He turns into a teapot", "He grows wings and flies away", "He gradually disappears until his grin remains", "He becomes invisible"],
        correctAnswer: "He gradually disappears until his grin remains",
    },
    {
        question: "What is Cheshire Cat's famous catchphase?",
        answers: ["Life is but a dream", "We're all mad here", "Off with their heads!", "Curiouser and curiouser"],
        correctAnswer: "We're all mad here",
    },
    {
        question: "How does the Cheshire Cat help Alice?",
        answers: ["He teaches Alice how to fly", "He gives Alice money for a ticket home", "He provides Alice with crypic advice and directions, often confusing her further", "He watches her closely"],
        correctAnswer: "He provides Alice with crypic advice and directions, often confusing her further",
    },
]; 

//score, final score //
let score = 0;

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
