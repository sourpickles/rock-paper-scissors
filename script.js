function getComputerChoice() {
    var randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        computerSelection = "Rock";
        return computerSelection;
    } else if (randNum == 1) {
        computerSelection = "Paper";
        return computerSelection;
    } else {
        computerSelection = "Scissors";
        return computerSelection;
    }
}

function getPlayerChoice() {
    var playerSelection = prompt("Enter your choice: ");
    return playerSelection
}

function play(computerSelection, playerSelection) {
    console.log(getPlayerChoice());
    console.log(getComputerChoice());
    if (computerSelection === playerSelection) {
      console.log("Its a tie");
    } else {
      console.log("Its not a tie");
    }
}

//issue: console always shows "Its a tie"
