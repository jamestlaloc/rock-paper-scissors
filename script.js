const para = document.createElement("p");
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
  let computerScore = 0;
  let humanScore = 0;
  
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
    if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore++;
      para.textContent = "You win!!! Paper beats Rock.";
      results.appendChild(para);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
      humanScore++;
      console.log("You win!!! Rock beats Scissors."); 
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
      humanScore++;
      console.log("You win!!! Scissors beats Paper.");
    } else if (computerChoice === "paper" && humanChoice === "rock"){
      computerScore++;
      console.log("You lose! Paper beats Rock.");
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
      computerScore++;
      console.log("You lose! rock beats scissors.");    
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
      computerScore++;
      console.log("You lose! Scissors beats Paper.");
    } else {
      console.log("It's a draw!")
    }
};