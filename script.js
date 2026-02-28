const para = document.createElement("p");
const humanScoreDisplay = document.querySelector(".human-score");
const humanPoint = document.createElement("p");
const cpuScoreDisplay = document.querySelector(".cpu-score");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let humanChoice = event.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)})});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice].toLowerCase();
};

function playRound(humanChoice, computerChoice){
  para.textContent = `You chose: ${humanChoice} | Computer chose: ${computerChoice}`;
  results.append(para);
  
    if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore++;
      humanPoint.textContent = humanScore;
      para.textContent = "You win!!! Paper beats Rock.";
      humanScoreDisplay.appendChild(humanPoint);
      results.appendChild(para);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
      humanScore++;
      para.textContent = "You win!!! Rock beats Scissors."; 
      results.appendChild(para);
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
      humanScore++;
      para.textContent= "You win!!! Scissors beats Paper.";
      results.appendChild(para);
    } else if (computerChoice === "paper" && humanChoice === "rock"){
      computerScore++;
      para.textContent = "You lose! Paper beats Rock.";
      results.appendChild(para);
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
      computerScore++;
      para.textContent = "You lose! rock beats scissors.";
      results.appendChild(para);    
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
      computerScore++;
      para.textContent = "You lose! Scissors beats Paper.";
      results.appendChild(para);
    } else {
      para.textContent = "It's a draw!";
      results.appendChild(para);
    }
};