var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Dynamically updates an ul element with new highscores from localStorage
highScoresList.innerHTML = 
  highScores.map( score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  }).join("");