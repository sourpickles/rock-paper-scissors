var playerScore = 0;
var computerScore = 0;

var buttons = document.querySelectorAll("#btn");
var displayPlayerChoice = document.querySelector("#displayPlayerChoice");
var displayComputerChoice = document.querySelector("#displayComputerChoice");
var showWinner = document.querySelector("#showWinner");
var displayPlayerScore = document.querySelector("#displayPlayerScore");
var displayComputerScore = document.querySelector("#displayComputerScore");

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

function play(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    showWinner.textContent = "Its a tie!";
    displayPlayerChoice.textContent = "Player Chose " + playerSelection;
    displayComputerChoice.textContent = "Computer Chose " + computerSelection;
    console.log("Its a tie " + computerScore + " " + playerScore);
    return "Its a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      showWinner.textContent = "Player wins this round!";
      displayPlayerChoice.textContent = "Player Chose " + playerSelection;
      displayComputerChoice.textContent = "Computer Chose " + computerSelection;
      console.log("Player wins " + computerScore + " " + playerScore);
      return "Player wins!";
  } else if (computerSelection == "rock" && playerSelection == "scissors" ||
      computerSelection == "scissors" && playerSelection == "paper" ||
      computerSelection == "paper" && playerSelection == "rock") {
      computerScore++;
      showWinner.textContent = "Computer wins this round!";
      displayPlayerChoice.textContent = "Player Chose " + playerSelection;
      displayComputerChoice.textContent = "Computer Chose " + computerSelection;
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
        showWinner.textContent = "Congrats, Player wins!";
      } else if (computerScore === 3) {
          console.log("You lost");
          console.log("Player Score: " + playerScore);
          console.log("Computer Score: " + computerScore);
          showWinner.textContent = "Computer wins, better luck next time!";
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
