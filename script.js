"use strict";

//Initial conditions
let userCurrentScore = 0;
let computerCurrentScore = 0;

document.querySelector("h2").classList.add("invisible");
document.querySelector(".refresh").classList.add("invisible");

//flipping text for computer's score text
let trans = document.querySelector(".trans").textContent;
const transo = function () {
  let newTrans = "";
  for (var i = trans.length - 1; i >= 0; i--) {
    newTrans += trans.charAt(i);
  }
  return newTrans;
};
document.querySelector(".trans").textContent = transo();

// Refresh Button

document.querySelector(".refresh").addEventListener("click", function () {
  reset();
});

//Restore Initial conditions

function reset() {
  document.querySelector("h1").textContent = "Let the game start!";
  document.querySelector(".yourScore").textContent = "0";
  document.querySelector(".computerScore").textContent = "0";
  document.querySelector(".your").textContent = "Your input";
  document.querySelector(".computers").textContent = "Computer's input";
  document.querySelector("h2").classList.add("invisible");
  document.querySelector("h2").classList.remove("win");
  document.querySelector("h2").classList.remove("loose");
  document.body.style.backgroundColor = "#ffe1af";
  userCurrentScore = 0;
  computerCurrentScore = 0;
}

//At the end of five rolls each
function finalize() {
  document.querySelector("h2").classList.remove("win");
  document.querySelector("h2").classList.remove("loose");
  document.querySelector("h2").classList.add("invisible");
}

//Execute Button clicks

let random = Math.ceil(Math.random() * 3) - 1;
const values = ["Rock", "Paper", "Scissors"];
let computerSelection = values[random];

document.querySelector(".rock1").addEventListener("click", function () {
  random = Math.ceil(Math.random() * 3) - 1;
  computerSelection = values[random];
  let yourInput = document.querySelector(".rock1").alt;
  let playerSelection = yourInput;
  automate(playerSelection);
});

document.querySelector(".paper1").addEventListener("click", function () {
  random = Math.ceil(Math.random() * 3) - 1;
  computerSelection = values[random];
  let yourInput = document.querySelector(".paper1").alt;
  let playerSelection = yourInput;
  automate(playerSelection);
});

document.querySelector(".scissors1").addEventListener("click", function () {
  random = Math.ceil(Math.random() * 3) - 1;
  computerSelection = values[random];
  let yourInput = document.querySelector(".scissors1").alt;
  let player = yourInput;
  automate(player);
});

//Compare User and Computer

function automate(playerSelection) {
  if (userCurrentScore < 5 && computerCurrentScore < 5) {
    if (
      playerSelection.toUpperCase() == "ROCK" ||
      playerSelection.toUpperCase() == "PAPER" ||
      playerSelection.toUpperCase() == "SCISSORS"
    ) {
      document.querySelector(".your").textContent =
        playerSelection.toUpperCase();
      document.querySelector(".computers").textContent =
        computerSelection.toUpperCase();

      if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        draw();
      } else if (
        (playerSelection.toUpperCase() == "ROCK" &&
          computerSelection.toUpperCase() == "PAPER") ||
        (playerSelection.toUpperCase() == "SCISSORS" &&
          computerSelection.toUpperCase() == "ROCK") ||
        (playerSelection.toUpperCase() == "PAPER" &&
          computerSelection.toUpperCase() == "SCISSORS")
      ) {
        userLoses(playerSelection);
      } else if (
        (computerSelection.toUpperCase() == "ROCK" &&
          playerSelection.toUpperCase() == "PAPER") ||
        (computerSelection.toUpperCase() == "SCISSORS" &&
          playerSelection.toUpperCase() == "ROCK") ||
        (computerSelection.toUpperCase() == "PAPER" &&
          playerSelection.toUpperCase() == "SCISSORS")
      ) {
        userWins(playerSelection);
      }
    }
  } else {
    if (computerCurrentScore == 5 && userCurrentScore < 5) {
      document.querySelector(
        "h1"
      ).textContent = `You Lost with ${computerCurrentScore}:${userCurrentScore}`;
      document.body.style.backgroundColor = "#FF5C58";
      finalize();
    } else if (userCurrentScore == 5 && computerCurrentScore < 5) {
      document.querySelector(
        "h1"
      ).textContent = `You Win with ${userCurrentScore}:${computerCurrentScore}`;
      document.body.style.backgroundColor = "#B1E693";
      finalize();
    }
  }
}

//Win Lose Draw Functionality

function userWins(playerSelection) {
  userCurrentScore++;
  document.querySelector("h1").textContent = `Current Leader: ${
    userCurrentScore >= computerCurrentScore ? "You" : "Computer"
  }`;
  document.querySelector(
    "h2"
  ).textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  document.querySelector("h2").classList.remove("loose");
  document.querySelector("h2").classList.add("win");
  document.querySelector("h2").classList.remove("invisible");
  document.querySelector(".refresh").classList.remove("invisible");
  document.querySelector(".yourScore").textContent = userCurrentScore;
  if (userCurrentScore == 5) {
    automate("nothing");
  }
}

function userLoses(playerSelection) {
  computerCurrentScore++;
  document.querySelector("h1").textContent = `Current Leader: ${
    computerCurrentScore >= userCurrentScore ? "Computer" : "You"
  }`;
  document.querySelector(
    "h2"
  ).textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  document.querySelector("h2").classList.remove("win");
  document.querySelector("h2").classList.add("loose");
  document.querySelector("h2").classList.remove("invisible");
  document.querySelector(".refresh").classList.remove("invisible");
  document.querySelector(".computerScore").textContent = computerCurrentScore;
  if (computerCurrentScore == 5) {
    automate("nothing");
  }
}

function draw() {
  document.querySelector("h2").textContent = "Draw!";
  document.querySelector("h2").classList.remove("invisible");
  document.querySelector(".refresh").classList.remove("invisible");
  document.querySelector("h2").classList.remove("win");
  document.querySelector("h2").classList.remove("loose");
}

//LeaderBoard
document.querySelector("h1");
//Selection Buttons
document.querySelector(".rock");
document.querySelector(".paper");
document.querySelector(".scissors");
//Player Score
document.querySelector(".yourScore");
//Computer Score
document.querySelector(".computerScore");
//Player Result
document.querySelector(".your");
//Computer Result
document.querySelector(".computers");
//Status
document.querySelector("h2");
//Reset Button
document.querySelector(".refresh");
