// Variables
var startBtn = document.querySelector('#start');
var questionEL = document.querySelector('#question-title');
var timerEL = document.querySelector('#timer');
var choice0El = document.querySelector('#choice-1');
var choice1El = document.querySelector('#choice-2');
var choice2El = document.querySelector('#choice-3');
var choice3El = document.querySelector('#choice-4');
var score = document.querySelector('#score');
var currentIndex = 0;
var questionContain = document.querySelector('.questions-container');

// Possible Questions
var arrayQuestions = [
    {
        question: 'How would you make an Array in JavaScript?',
        choice0: 'array = ("item1, item2, item3);',
        choice1: 'var array = [item1, item2, item3,];',
        choice2: 'arrayItems {item1 + item2 + item3};',
        choice3: 'array[item1, item2, item3]',
        answer: 'array = ("item1, item2, item3);',
    },
    {
        question: 'Which of the following is not a JavaScript data type?',
        choice0: 'number',
        choice1: 'list',
        choice2: 'string',
        choice3: 'boolean',
        answer: 'list',
    },
    {
        question: 'What is the correct way to declare a variable in JavaScript?',
        choice0: 'var x = 10;',
        choice1: 'variable x = 10;',
        choice2: 'var (x) = 10;',
        choice3: 'variable x is 10;',
        answer: 'var x = 10;',
    },
    {
        question: 'Which one of these is not a JavaScript operator?',
        choice0: '%',
        choice1: '*',
        choice2: '||',
        choice3: '$',
        answer: '$',
    },
    {
        question: 'Which of these is useful for debugging in JavaScript?',
        choice0: 'debug.script();',
        choice1: 'check.error();',
        choice2: 'console.log();',
        choice3: 'debug.log();',
        answer: 'console.log();',
    },
    
];


//Timer for game
var timeLeft = 60;

 function timer() {
    var timerInterval = setInterval(function() {
        if(timeLeft > 0)
        timeLeft--;
        timerEL.textContent = 'Time left: ' + timeLeft;
        // if(timeLeft == 0)
        // window.location.replace("./highscores.html");
    },1000);
};

choice0El.addEventListener('click', function() {
    var userChoice = choice0El.textContent
    console.log(userChoice);
});

choice1El.addEventListener('click', function() {
    var userChoice = choice1El.textContent
    console.log(userChoice);
});

choice2El.addEventListener('click', function() {
    var userChoice = choice2El.textContent
    console.log(userChoice);
});

choice3El.addEventListener('click', function() {
    currentIndex++
    console.log('clicked');
    // var userChoice = choice3El.textContent
    // console.log(userChoice);
});

function firstQuestion() {
    var currentQuestion = arrayQuestions[currentIndex];
    questionEL.textContent = currentQuestion.question;
    
    choice0El.textContent = arrayQuestions[currentIndex].choice0;
    choice1El.textContent = arrayQuestions[currentIndex].choice1;
    choice2El.textContent = arrayQuestions[currentIndex].choice2;
    choice3El.textContent = arrayQuestions[currentIndex].choice3;
};

function firstAnswer() {
    if(userChoice == arrayQuestions[0].answer) {
        score = score + 100;
    }else {
        console.log('wrong')
    }
}




timer();
firstQuestion();
firstAnswer();





//increment current index each time answer 

//make div for buttons 
//make event listener for buttons




//Check if question is correct if not -15secs
//Display next question and repeat until timer runs out
//When timer ends display end screen and final score/store it
//Click to view highscore page



//create buttons for each choice
//for for loop add questions create btn fo ea choice append to div and text context
//function to check right or wrong
//create an array for local storage