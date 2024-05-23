// Questions //
const questions = [
    {
        question: "What is the scientific name for the domestic cat?",
        answers: [
            { text: 'Felis catus', correct: true },
            { text: 'Meowicus purricus', correct: false },
            { text: 'Furry maximus', correct: false },
            { text: 'Whiserkells whiskerensis', correct: false }  
        ]
    },
    {
        question: "What is the average span life of a cat?",
        answers: [
            { text: '12 to 15 years', correct: true },
            { text: '20 to 25 years', correct: false },
            { text: '5 to 7 years', correct: false },
            { text: '30 to 35 years', correct: false }
            
        ]
    },
    {
        question: "According to the  wivestales: How many lives does a cat have?",
        answers: [
            { text: '13', correct: false },
            { text: '1', correct: false },
            { text: '3', correct: false },
            { text: '7', correct: true }
        ]
    },
    {
        question: "What is a group of cats called?",
        answers: [ 
            { text: 'A meow-meow crew', correct: false },
            { text: 'A whisker-flock', correct: false },
            { text: 'A clowder or a glaring', correct: true },
            { text: 'A purr-fect party', correct: false }
        ]
    },
    {
        question: "What is the largest breed of domestic cat?",
        answers: [
            { text: 'Munchkin', correct: false },
            { text: 'Scottish Fold', correct: false },
            { text: 'Irish Love', correct: false },
            { text: 'Maine Coon', correct: true }
        ]
    },
    {
        question: "What is the cat's primary sense?",
        answers: [
            { text: 'Sense of hearing', correct: false },
            { text: 'Sense of smell', correct: true },
            { text: 'Sense of taste', correct: false },
            { text: 'Sense of sight', correct: false },
        ]  
    },
    {
        question: "What is a cat's grooming behavior called?",
        answers: [
            { text: 'Fur-fluffing', correct: false },
            { text: 'Pur-polishing', correct: false },
            { text: 'Washing Whiskers', correct: false },
            { text: 'Allogrooming or mutual grooming', correct: true }
        ]
    },        
    {
        question: "What is the term for a female cat that hasn't been spayed?",
        answers: [
            { text: 'Duchess', correct: false },
            { text: 'Lady', correct: false },
            { text: 'Queen', correct: true },
            { text: 'Empress', correct: false }
        ]
    }, 
    {
        question: "What is the name for a cat's retractable claws?",
        answers: [
            { text: 'Sharp-shooters', correct: false },
            { text: 'Claw-flaws', correct: false },
            { text: 'Retractile or protractile claws', correct: true },
            { text: 'Paws', correct: false }
        ]
    },
    {
        question: "In Alice in Wonderland, ' What color is the Cheshire Cat?",
        answers: [
            { text: 'Green and Blue dots', correct: false },
            { text: 'Pink and Purple stripes', correct: true },
            { text: 'Orange and Yellow swirls', correct: false },
            { text: 'Black and White dots', correct: false }
        ]
    },
    {
        question: "Finish the quote: 'We're all mad here ... '?",
        answers: [
            { text: '.. because cats rule !!', correct: false },
            { text: '.. but that is what makes life interesting', correct: true},
            { text: '.. except for the teapot corner', correct: false },
            { text: '.. so let us have a tea party !', correct: false }
        ]
    },
    {
        question: "What does the Cheshire Cat like to do in the story?",
        answers: [
            { text: 'He likes to tease and confuse Alice with his cryptic comments', correct: true },
            { text: 'He likes to take long naps', correct: false },
            { text: 'He loves to play chess with the Queen of Hearts!', correct: false },
            { text: 'He enjoys baking cookies for the Mad Hatters tea parties', correct: false }
        ]
    },
    {
        question: "What distinctive feature does the Cheshire Cat have?",
        answers: [
            { text: 'He ... can vanish, leaving only its grin visible', correct: true },
            { text: 'He .. has glowing eyes', correct: false},
            { text: 'He .. has wings', correct: false },
            { text: 'He .. can talk to other animals', correct: false }
        ]
    },
    {
        question: "What does the Cheshire Cat's grin look like?",
        answers: [
            { text: 'A small, shy smile that never fades', correct: false },
            { text: 'A wide, mischievous grin that floats in the air', correct: true },
            { text: 'A cat toothy grin rainbow-colored teeth', correct: false },
            { text: 'A sad grin with tears streaming down his face', correct: false }
        ]
    },
    {
        question: "Who does the Cheshire Cat offer advice to in 'Alice in Wonderland?",
        answers: [
            { text: 'He gives advice to the White Rabbit', correct: false },
            { text: 'He advises the March Hare', correct: false },
            { text: 'He advises the March Haare', correct: false },
            { text: 'He offers advice and guidance to Alice', correct: true }
        ]
    },
    {
        question: "Where does the Cheshire Cat first appear in 'Alice in Wonderland'?",
        answers: [
            { text: 'He first merges ..from a hole in the ground', correct: false },
            { text: 'He appears ..sitting on a mushroom in the garden', correct: false },
            { text: 'He first appears .. in the branch of a tree in the forest', correct: true },
            { text: 'He appears ..in the Queen of Hearts palace', correct: false }
        ]
    },
    {
        question: "What happens to the Cheshire Cat's body in the story?",
        answers: [
            { text: 'He turns into a teapot', correct: false },
            { text: 'He gradually disappears until his grin remains', correct: true },
            { text: 'He grows wings and flies away', correct: false },
            { text: 'He becomes invisible', correct: false }
        ]
    },
    {
        question: "What is Cheshire Cat's famous catchphase?",
        answers: [
            { text: 'Life is but a dream', correct: false },
            { text: 'Curiouser and curiouser', correct: false},
            { text: 'Off with their heads!', correct: false },
            { text: 'We are all mad here', correct: true }
        ]
    },
    {
        question: "How does the Cheshire Cat help Alice?",
        answers: [
            { text: 'He teaches Alice how to fly', correct: false },
            { text: 'He gives Alice money for a ticket home', correct: false },
            { text: 'He watches her closely', correct: false },
            { text: 'He provides Alice with crypic advice and directions, often confusing her further', correct: true }
        ]
    }
]; 
