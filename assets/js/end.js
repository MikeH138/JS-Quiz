var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var recentScore = localStorage.getItem("recentScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var maxHighScores = 10;

finalScore.innerText = ("You scored " + recentScore + " out of 30 points!");

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
