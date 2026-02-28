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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  for(let i = 0; i < 7; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer's Score: ${computerScore}`);
    console.log("---------------------")
  }
  function playRound(humanChoice, computerChoice){
    
  console.log(`You: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
    if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore++;
      console.log("You win!!! Paper beats Rock.");
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
}