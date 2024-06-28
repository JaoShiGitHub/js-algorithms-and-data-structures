// Random computer's choice
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return `${options[Math.floor(Math.random(options) * options.length)]}`
}

let playerScore = 0;
let computerScore = 0;

// Check if the player has won the round
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}
