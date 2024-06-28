let playerScore = 0;
let computerScore = 0;

// Random computer's choice
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  // return `${options[Math.floor(Math.random(options) * options.length)]}`
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Check if the player has won the round
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}


