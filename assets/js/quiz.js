const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var timer = 75;
var availableQuestions = [];

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

const correctAnswer = 5;
const maxQuestions = 6;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

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
      }

    selectedChoice.parentElement.classList.add(answerStyle);

    setTimeout( () => {
      selectedChoice.parentElement.classList.remove(answerStyle);
      getNewQuestion();
    }, 1000);

    
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();