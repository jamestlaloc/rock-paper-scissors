const buttons = document.querySelectorAll("btn");
console.log(buttons);

// function getComputerChoice() {
//   const choices = ["Rock", "Paper", "Scissors"];

//   let randomChoice = Math.floor(Math.random() * choices.length);

//   return choices[randomChoice].toLowerCase();
// };

// function playGame() {
//   let computerScore = 0;
//   let humanScore = 0;
// }

// function playRound(humanChoice){
//   getComputerChoice();
//   playerSelection();
//   console.log(humanChoice);
    
//   console.log(`You chose: ${humanChoice}`);
//   console.log(`Computer: ${computerChoice}`);
//     if(humanChoice === "paper" && computerChoice === "rock"){
//       humanScore++;
//       console.log("You win!!! Paper beats Rock.");
//     } else if (humanChoice === "rock" && computerChoice === "scissors"){
//       humanScore++;
//       console.log("You win!!! Rock beats Scissors."); 
//     } else if (humanChoice === "scissors" && computerChoice === "paper"){
//       humanScore++;
//       console.log("You win!!! Scissors beats Paper.");
//     } else if (computerChoice === "paper" && humanChoice === "rock"){
//       computerScore++;
//       console.log("You lose! Paper beats Rock.");
//     } else if (computerChoice === "rock" && humanChoice === "scissors"){
//       computerScore++;
//       console.log("You lose! rock beats scissors.");    
//     } else if (computerChoice === "scissors" && humanChoice === "paper"){
//       computerScore++;
//       console.log("You lose! Scissors beats Paper.");
//     } else {
//       console.log("It's a draw!")
//     }
// };

// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors');


// rock.addEventListener('click', () => {
//   humanChoice = 'rock';
//   playRound();
// });
// paper.addEventListener('click', () => {
//   humanChoice = 'paper';
//   playRound();
// });
// scissors.addEventListener('click', () => {
//   humanChoice = 'scissors';
//   playRound();
// });
