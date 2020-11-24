// Variables for DOM manipulation
var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var recentScore = localStorage.getItem("recentScore");
var scoreText = document.getElementById("score");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = ("You scored " + recentScore + " out of 30 points!");

// Function for saving a users highscore in localStorage
saveHighScore = e => {
  e.preventDefault();

  var score = {
    score: recentScore,
    name: username.value
  };
  highScores.push(score);
  highScores.sort( (a,b) => {
    return b.score - a.score;
  });
  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
