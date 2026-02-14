let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  // Create an array of choices.
  const choices = ["Rock", "Paper", "Scissors"];

  //Declare a random choice variable and assign it to the value that grabs a random number based on the length of the array of choices.

  //Math.random() generates a random floating number between 0 and 1. When multiplied by a number, it creates a max number.

  //Math.floor() then rounds that number down so that we get a whole number.
  let randomChoice = Math.floor(Math.random() * choices.length);

  // We return the random index that is chosen via the randomChoice variable, and using brackets to access that index from the choices array.
  return choices[randomChoice].toLowerCase();
};

function getHumanChoice() {
  let humanChoice = prompt("Choose: Rock, Paper, or Scissors?");
  return humanChoice.toLowerCase();
};

function playRound(humanChoice, computerChoice){
  let roundWinner;
  console.log(humanChoice);
  console.log(computerChoice);
    if(humanChoice === "paper" && computerChoice === "rock"){
      console.log("You: You lose! Paper beats Rock.");
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
      console.log("You: You lose! Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
      console.log("You: You lose! Scissors beats Rock.");
      humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock"){
      console.log("Computer: You lose! Paper beats Rock.");
      computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
      console.log("Computer: You lose! rock beats scissors.");
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper"){
      console.log("Computer: You lose! Scissors beats Paper.");
      computerScore++;
    } else {
      console.log("It's a draw!")
    }
    console.log(humanScore);
    console.log(computerScore);
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);