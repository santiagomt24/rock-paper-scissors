//initilize choices
let humanChoice = 0;
let computerChoice = 0;

//initilize rounds in 0
let rounds = 0;
let maxRounds = 5;

//initilize scores in 0
let humanScore = 0;
let computerScore = 0;

//defining array values for the computer to randomly choose
const validOptions = ["rock", "paper", "scissors"];
let length = validOptions.length;

//using the array to return random choice
function getComputerChoice() {
    return computerChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
}

//use buttons instead of prompts

const humanRock = document.querySelector("#rock");
const humanPaper = document.querySelector("#paper");
const humanScissors = document.querySelector("#scissors");

humanRock.addEventListener("click", () => getHumanChoice("rock"));
humanPaper.addEventListener("click", () => getHumanChoice("paper"));
humanScissors.addEventListener("click", () => getHumanChoice("scissors"));

const counter = document.querySelector(".score");

function getHumanChoice (selection) {
    if (rounds < maxRounds) {
    humanChoice = selection;
    getComputerChoice();
    playRound(humanChoice,computerChoice);
    container.appendChild(roundResults);
    counter.textContent = humanScore + "   -   " + computerScore;
    rounds++;
    } else if (rounds === maxRounds) {
        if (humanScore < computerScore) {
            counter.textContent = "Game Over. You lost, best luck next time";
        } else if (humanScore > computerScore) {
            counter.textContent = "Game Over. You've won, well played";
        } else {
            counter.textContent = "Game Over. It was a draw";
        }
        roundResults.textContent = "Your score is: " + humanScore + " - Computer score is: " + computerScore;
    }
}

//Add this div for displaying results 
const roundResults = document.createElement("h3");

//Round function

function playRound(humanChoice, computerChoice) {
  if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || 
  (humanChoice == "scissors" && computerChoice == "paper")) {
    humanScore++;
    roundResults.textContent = "You win this round, " + humanChoice + " beats " + computerChoice;
  } else if (humanChoice != computerChoice) {
    computerScore++;
    roundResults.textContent = "You lose this round, " + computerChoice + " beats " + humanChoice;
  } else {
    roundResults.textContent = "It's a draw, both chose " + humanChoice;
  }
}