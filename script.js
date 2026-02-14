function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 30);

  return (randomNumber <= 10) ? "Rock" :
  (randomNumber > 10 && randomNumber<= 20) ? "paper" : "Scissors";


  // if (randomNumber <= 10) {
  //   return "Rock";
  // } else if (randomNumber > 10 && randomNumber <= 20){
  //   return "Paper";
  // } else {
  //   return "Scissors";
  // }
};

console.log(getComputerChoice());