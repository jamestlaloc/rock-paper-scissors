function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 300);

  if (randomNumber <= 100) {
    return "Rock";
  } else if (randomNumber > 100 && randomNumber <= 200){
    return "Paper";
  } else {
    return "Scissors";
  }
}