var playerScore = 0;
var computerScore = 0;
var rounds = 0;

var buttons = document.querySelectorAll("#btn");
var displayPlayerChoice = document.querySelector("#displayPlayerChoice");
var displayComputerChoice = document.querySelector("#displayComputerChoice");
var showWinner = document.querySelector("#showWinner");
var displayPlayerScore = document.querySelector("#displayPlayerScore");
var displayComputerScore = document.querySelector("#displayComputerScore");

function getComputerChoice() {
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
    rounds++;
    showWinner.textContent = "Its a tie!";
    displayPlayerChoice.textContent = "Player chose " + playerSelection;
    displayComputerChoice.textContent = "Computer chose " + computerSelection;
    displayPlayerScore.textContent = "Player's Score: " + playerScore;
    displayComputerScore.textContent = "Computer's Score: " + computerScore;
    updateScoreLine();
    updateGameBox;
    return "Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "scissors" && computerSelection == "paper" ||
      playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      rounds++;
      showWinner.textContent = "Player wins this round!";
      displayPlayerChoice.textContent = "Player chose " + playerSelection;
      displayComputerChoice.textContent = "Computer chose " + computerSelection;
      displayPlayerScore.textContent = "Player's Score: " + playerScore;
      displayComputerScore.textContent = "Computer's Score: " + computerScore;
      updateScoreLine();
      updateGameBox;
      return "Player";
  } else if (computerSelection == "rock" && playerSelection == "scissors" ||
      computerSelection == "scissors" && playerSelection == "paper" ||
      computerSelection == "paper" && playerSelection == "rock") {
      computerScore++;
      rounds++;
      showWinner.textContent = "Computer wins this round!";
      displayPlayerChoice.textContent = "Player chose " + playerSelection;
      displayComputerChoice.textContent = "Computer chose " + computerSelection;
      displayPlayerScore.textContent = "Player's Score: " + playerScore;
      displayComputerScore.textContent = "Computer's Score: " + computerScore;
      updateScoreLine();
      updateGameBox;
      return "Computer";
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
        showWinner.textContent = "Congrats, Player wins!";
      } else if (computerScore === 3) {
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

function updateScoreLine() {
  if (playerScore == 1) {
    makePlayerScoreLine1();
  } else if (playerScore == 2) {
    makePlayerScoreLine2();
  } else if (playerScore == 3) {
    makePlayerScoreLine3();
  } 
  if (computerScore == 1) {
    makeComputerScoreLine1();
  } else if (computerScore == 2) {
    makeComputerScoreLine2();
  } else if (computerScore == 3) {
    makeComputerScoreLine3();
  }
}

//score line player
function makePlayerScoreLine1() {
  document.getElementById('playerScoreLine').classList.remove('scoreLine0');
  document.getElementById('playerScoreLine').classList.add('scoreLine1');
}

function makePlayerScoreLine2() {
  document.getElementById('playerScoreLine').classList.remove('scoreLine1');
  document.getElementById('playerScoreLine').classList.add('scoreLine2');
}

function makePlayerScoreLine3() {
  document.getElementById('playerScoreLine').classList.remove('scoreLine2');
  document.getElementById('playerScoreLine').classList.add('scoreLine3');
}

//score line computer
function makeComputerScoreLine1() {
  document.getElementById('computerScoreLine').classList.remove('scoreLine0');
  document.getElementById('computerScoreLine').classList.add('scoreLine1');
}

function makeComputerScoreLine2() {
  document.getElementById('computerScoreLine').classList.remove('scoreLine1');
  document.getElementById('computerScoreLine').classList.add('scoreLine2');
}

function makeComputerScoreLine3() {
  document.getElementById('computerScoreLine').classList.remove('scoreLine2');
  document.getElementById('computerScoreLine').classList.add('scoreLine3');
}

function updateGameBox() {
  var roundBox = document.querySelector("#roundBox");
  var logText = document.createElement("div");
  logtext.textContent = `Round ${rounds}\nPlayer Choice: ${playerSelection}\nComputer Choice: ${computerSelection}\nScore: ${playerScore}:${computerScore}`;
  roundBox.appendChild(logText);
}

game()
