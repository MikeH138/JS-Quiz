// Variables for DOM Manipulation
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const timerText = document.getElementById("timer");
var scoreText = document.getElementById("score");

// Variables for various quiz functions
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
const correctAnswer = 5;
const maxQuestions = 6;
var recentScore = localStorage.getItem("recentScore");

// Variables for timer function
var quizTime = 60;
var minutes = 0;
var seconds = 0;
var counter = 0;
const timePenalty = 9;

// Function for the quiz timer
function quizTimer() {
  var timer = setInterval(function () {
    counter++
    minutes = Math.floor((quizTime - counter) / 60);
    seconds = quizTime - minutes * 60 - counter;

    if (counter >= quizTime) {recentScore
      clearInterval(timer);
      window.location.assign("./end.html");
    }

    if (seconds <= 9) {
      timerText.innerHTML = `${minutes}:0${seconds}`;
    } else {
      timerText.innerHTML = `${minutes}:${seconds}`;
    }
  }, 1000);
}

// Array of questions and answers used for the quiz, which are all individual objects within this array
var questions = [
  {
    question: "Who Invented Javascript?",
    choice1: "Elon Musk",
    choice2: "Bill Gates",
    choice3: "Brendan Eich",
    choice4: "Rami Malek",
    answer: 3
  },
  {
    question: "If you wanted to write your Javascript directly in an HTML file, which element tags would it be between?",
    choice1: "<script></script>",
    choice2: "<java></java>",
    choice3: "<j></j>",
    choice4: "<javascript></javascript>",
    answer: 1
  }, 
  {
    question: "What is the correct syntax for referring to an external script file called 'app.js'?",
    choice1: "<script file='app.js'></script>",
    choice2: "<script name='app.js'></script>",
    choice3: "<script href='app.js'></script>",
    choice4: "<script src='app.js'></script>",
    answer: 4
  }, 
  {
    question: "In Javascript, what is the comparison operator that means 'not equal to'?",
    choice1: "==",
    choice2: "!=",
    choice3: ".=",
    choice4: "=!",
    answer: 2
  },
  {
    question: "What is the correct syntax for creating a single line comment in Javascript?",
    choice1: "/ ",
    choice2: "?/ ",
    choice3: "// ",
    choice4: "<!-- ",
    answer: 3
  },
  {
    question: "Which of these words is NOT a reserved keyword in Javascript?",
    choice1: "var",
    choice2: "return",
    choice3: "coding",
    choice4: "const",
    answer: 3
  },
];

// Function to start the game
function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

/* Function to sort through the available questions in the above array. It randomly selects a question, and once that question is used it will not be picked again.
   When the user moves on to the next question, the counter will update to indicate what question out of 6 they are on.
   Once the user answers all 6 questions, they are redirected to the results page (end.html).
*/
function getNewQuestion() {
  if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("recentScore", score);
    return window.location.assign("end.html");
  }
  questionCounter++;
  questionCounterText.innerText = questionCounter + "/" + maxQuestions;

  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
      var number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

/* This function sets styling for correct and incorrect answers, and adds a 1 second delay before moving to the next question.
   As well, the functions for adding 5 points for a correct answer, and subtracting 10 seconds for an incorrect answer are 
   contained in this section too.
*/
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];

    var answerStyle = 'incorrect';
      if (selectedAnswer == currentQuestion.answer) {
        answerStyle = 'correct';
      }
    
      if(answerStyle === 'correct') {
        incrementScore(correctAnswer);
      } else if (answerStyle) {
        decrementTimer(timePenalty);
      }

    selectedChoice.parentElement.classList.add(answerStyle);

    setTimeout( () => {
      selectedChoice.parentElement.classList.remove(answerStyle);
      getNewQuestion();
    }, 1000);  
  });
});

/* Function for increasing the users' score. 
This is done by dynamically updating the innerText property of the h1 element associated with the variable scoreText which stores the value of score (the current score). */
function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
};

// Function for decreasing the quiz timer.
function decrementTimer(num) {
  quizTime -= num;
};

startGame();
quizTimer();