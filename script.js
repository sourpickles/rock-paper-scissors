function getComputerChoice () {
  var randNum = Math.floor(Math.random() * 3);
  if (randNum == 0) {
    return "rock";
  } else if (randNum == 1) {
    return "paper";
  } else {
    return "scissors"
  }
}

function play(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "rock") {
    return "Player wins!";
  } else if (computerSelection == "rock" && playerSelection == "scissors" ||
      computerSelection == "scissors" && playerSelection == "paper" ||
      computerSelection == "paper" && playerSelection == "rock") {
    return "Computer wins!";
  }
}

function game() {
  var playerSelection = "";
  var computerSelection = "";
  //plays for five rounds total. starts counting at 0
  for (rounds = 0; rounds < 5; rounds++) {
    play(playerSelection, computerSelection);
    var playerSelection = prompt("Rock, Paper, or Scissors: ").toLowerCase();
    var computerSelection = getComputerChoice();
    console.log("Player picks " + playerSelection);
    console.log("Computer picks " + computerSelection);
    console.log(play(playerSelection, computerSelection));
  }
}

game()
