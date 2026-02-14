function getComputerChoice() {
  // Create an array of choices.
  const choices = ["Rock", "Paper", "Scissors"];

  //Declare a random choice variable and assign it to the value that grabs a random number based on the length of the array of choices.

  //Math.random() generates a random floating number between 0 and 1. When multiplied by a number, it creates a max number.

  //Math.floor() then rounds that number down so that we get a whole number.
  let randomChoice = Math.floor(Math.random() * choices.length);

  // We return the random index that is chosen via the randomChoice variable, and using brackets to access that index from the choices array.
  return choices[randomChoice];
};

function getHumanChoice() {
  let humanChoice = prompt("Choose: Rock, Paper, or Scissors?");
  return humanChoice;
};

