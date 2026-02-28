const para = document.createElement("p");
const humanScoreDisplay = document.querySelector(".human-score");
const humanPoint = document.createElement("p");
const cpuScoreDisplay = document.querySelector(".cpu-score");
const cpuPoint = document.createElement("p");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");
const newGame = document.createElement("button");
newGame.textContent = "Play Again";
let gameOver = false;

// Keeps track of score:
let computerScore = 0;
let humanScore = 0;

// Displays score:
cpuScoreDisplay.appendChild(cpuPoint);
humanScoreDisplay.appendChild(humanPoint);

// Initial display of zero points:
displayScores();

// Runs the game:
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if(gameOver) return;

    const humanChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    playGame(humanChoice, computerChoice)})});

function playGame(humanChoice, computerChoice) {

  // Runs the round:
  playRound(computerChoice, humanChoice);

  // Takes the stored points and renders them to display in DOM:
  displayScores();

  // Decides the winner:
  if (computerScore === 5) {
    gameOver = true;
    para.textContent = "Computer wins the game!"
    results.appendChild(newGame);

  };
  if (humanScore === 5) {
    gameOver = true;
    para.textContent = "You win the game!!"
    results.appendChild(newGame);
  }
  results.appendChild(para);
  

  function playRound(humanChoice, computerChoice){
    if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore++;
      para.textContent = "You win!!! Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
      humanScore++;
      para.textContent = "You win!!! Rock beats Scissors."; 
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
      humanScore++;
      para.textContent= "You win!!! Scissors beats Paper.";
    } else if (computerChoice === "paper" && humanChoice === "rock"){
      computerScore++;
      para.textContent = "You lose! Paper beats Rock.";
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
      computerScore++;
      para.textContent = "You lose! rock beats scissors.";    
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
      computerScore++;
      para.textContent = "You lose! Scissors beats Paper.";
    } else {
      para.textContent = "It's a draw!";
    }
    results.appendChild(para);
};
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice].toLowerCase();
};

function displayScores() {
  cpuPoint.textContent = computerScore;
  humanPoint.textContent = humanScore;
}

function gameReset() {
  computerScore = 0;
  humanScore = 0;
  displayScores();
  gameOver = false;
  results.removeChild(newGame);
}

newGame.addEventListener('click', (event) => {
  gameReset();
  para.textContent = "You start!"

});