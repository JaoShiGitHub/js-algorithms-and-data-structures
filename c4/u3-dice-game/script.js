const listOfAllDice = document.querySelector("#dice > .die");
const scoreInputs = document.querySelector("#score-options > div > input");
const currentRound = document.getElementById("current-round");
const currentRoundRolls = document.getElementById("current-round-rolls");
const totalScore = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.getElementsByClassName("rules-container");

const isModalShowing = rulesBtn.addEventListener("click", () => rulesContainer.toggle("hidden"));
const diceValuesArr;

let rolls = 0;
let score = 0;
let total = 0;
let round = 1;
