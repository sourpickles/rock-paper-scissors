var playerScore = 0;
var computerScore = 0;
var buttons = document.querySelectorAll("#btn");

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
    console.log("Its a tie " + computerScore + " " + playerScore);
    return "Its a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      console.log("Player wins " + computerScore + " " + playerScore);
      return "Player wins!";
  } else if (computerSelection == "rock" && playerSelection == "scissors" ||
      computerSelection == "scissors" && playerSelection == "paper" ||
      computerSelection == "paper" && playerSelection == "rock") {
      computerScore++;
      console.log("Computer wins " + computerScore + " " + playerScore);
      return "Computer wins!";
  }
}

function game() {
  buttons.forEach((button1) => {
    button1.addEventListener("click", () => {
      var computerSelection = getComputerChoice();
      if (button1.id === "btn") {
        play(button1.value, computerSelection)
      }
      if (playerScore === 3) {
        console.log("You won");
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
      } else if (computerScore === 3) {
          console.log("You lost");
          console.log("Player Score: " + playerScore);
          console.log("Computer Score: " + computerScore);
      }
      if (playerScore === 3 || computerScore === 3) {
        buttons.forEach((button) => {
          button.removeAttribute("id")          
        })
      }
    })
  }) 
}

game()
