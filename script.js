function getComputerChoice() {
  var randNum = Math.floor(Math.random() * 3);
  if (randNum == 0) {
      computerChoice = "Rock";
      return computerChoice;
  } else if (randNum == 1) {
      computerChoice = "Paper";
      return computerChoice;
  } else {
      computerChoice = "Scissors";
      return computerChoice;
  }
}

function play(computerSelection, playerSelection) {
  console.log("Player choice: " + playerSelection);
  console.log("Computer choice: " + computerSelection);
  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if (playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Player wins";
  } else if (computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Rock" && playerSelection == "Scissors" || computerSelection == "Scissors" && playerSelection == "Paper") {
    return "Computer wins";
  } 
}

function game() {
  //plays for five rounds total. starts counting at 0
  for (rounds = 0; rounds < 5; rounds++) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper, or Scissors: ");
    console.log(play(playerSelection, computerSelection));
    }
}

game()
