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
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper") {
    return "Player wins";
  } else if (computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Rock" && playerSelection == "Scissors" || computerSelection == "Scissors" && playerSelection == "Paper") {
    return "Computer wins";
  } else {
    return "Error";
  }
}

function game() {
  //plays for five rounds total. starts counting at 0
  for (rounds = 0; rounds <= 4; rounds++) {
    play(computerSelection, playerSelection);
    if (rounds <= 4) {
      game();
      console.log(rounds);
    } 
    }
  }

var rounds = 0;
const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper, or Scissors: ");

game()

//play the correct number of games and show prompt each round
