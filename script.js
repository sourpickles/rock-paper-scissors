function getComputerChoice() {
  var randNum = Math.floor(Math.random() * 3);
  if (randNum == 0) {
      computerChoice = "rock";
      return computerChoice;
  } else if (randNum == 1) {
      computerChoice = "paper";
      return computerChoice;
  } else {
      computerChoice = "scissors";
      return computerChoice;
  }
}

function play(computerSelection, playerSelection) {
  // Swiched because the console.log was printing the wrong varaiable
  console.log ("Computer choice: " + playerSelection);
  console.log("Player choice: " + computerSelection);
  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper") {
    return "Player wins";
  } else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "paper") {
    return "Computer wins";
  } 
}

function game() {
  //plays for five rounds total. starts counting at 0
  for (rounds = 0; rounds < 5; rounds++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, Paper, or Scissors: ").toLowerCase();
    console.log(play(playerSelection, computerSelection));
  }
}

game()
