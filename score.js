// Iteration 8: Making scoreboard functional

// Get score from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const receivedScore = urlParams.get("score");

// Display score on scoreboard
const scoreBoard = document.getElementById("score-board");
scoreBoard.textContent = receivedScore; // Use textContent for displaying text

// Play again button functionality
const playAgainButton = document.getElementById("play-again-button");
playAgainButton.onclick = () => {
  window.location.href = "./game.html";
};
