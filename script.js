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

function reset() {
  document.querySelector("h1").textContent = "Let the game start!";
  document.querySelector("input").value = "";
  document.querySelector(".yourScore").textContent = "0";
  document.querySelector(".computerScore").textContent = "0";
  document.querySelector(".your").textContent = "Your input";
  document.querySelector(".computers").textContent = "Computer's input";
  document.querySelector("h2").classList.add("invisible");
  document.querySelector("h2").classList.remove("win");
  document.querySelector("h2").classList.remove("loose");
  userCurrentScore = 0;
  computerCurrentScore = 0;
}

//At the end of five rolls each
function finalize() {
  document.querySelector("h2").classList.remove("win");
  document.querySelector("h2").classList.remove("loose");
  document.querySelector("h2").classList.add("invisible");
}

//Execute button

document.querySelector(".submit").addEventListener("click", function () {
  let random = Math.ceil(Math.random() * 3) - 1;
  const values = ["Rock", "Paper", "Scissors"];
  let computerSelection = values[random];
  let yourInput = document.querySelector("input").value;
  let playerSelection = yourInput;
  if (
    yourInput.length > 0 &&
    userCurrentScore < 5 &&
    computerCurrentScore < 5
  ) {
    if (
      yourInput.toUpperCase() == "ROCK" ||
      yourInput.toUpperCase() == "PAPER" ||
      yourInput.toUpperCase() == "SCISSORS"
    ) {
      document.querySelector(".your").textContent = yourInput.toUpperCase();
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
        userLoses();
      } else if (
        (computerSelection.toUpperCase() == "ROCK" &&
          playerSelection.toUpperCase() == "PAPER") ||
        (computerSelection.toUpperCase() == "SCISSORS" &&
          playerSelection.toUpperCase() == "ROCK") ||
        (computerSelection.toUpperCase() == "PAPER" &&
          playerSelection.toUpperCase() == "SCISSORS")
      ) {
        userWins();
      }
      document.querySelector("input").value = "";
    } else {
      document.querySelector("h2").textContent =
        "Choose: ROCK | PAPER | SCISSORS";
      document.querySelector("h2").classList.remove("invisible");
      document.querySelector(".refresh").classList.remove("invisible");
      document.querySelector("h2").classList.remove("win");
      document.querySelector("h2").classList.remove("loose");
      document.querySelector(".your").textContent = "Your input";
      document.querySelector(".computers").textContent = "Computer's input";
      document.querySelector("input").value = "";
    }
  }

  if (computerCurrentScore == 5 && userCurrentScore < 5) {
    document.querySelector(
      "h1"
    ).textContent = `You Lost with ${computerCurrentScore}:${userCurrentScore}`;
    finalize();
  } else if (userCurrentScore == 5 && computerCurrentScore < 5) {
    document.querySelector(
      "h1"
    ).textContent = `You Win with ${userCurrentScore}:${computerCurrentScore}`;
    finalize();
  } else if (userCurrentScore == 5 && computerCurrentScore == 5) {
    document.querySelector(
      "h1"
    ).textContent = `We have Draw ${computerCurrentScore}:${userCurrentScore}`;
    finalize();
  }

  function userWins() {
    document.querySelector("h1").textContent = `Current Leader: ${
      userCurrentScore > computerCurrentScore ? "You" : "Computer"
    }`;
    document.querySelector(
      "h2"
    ).textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    document.querySelector("h2").classList.remove("loose");
    document.querySelector("h2").classList.add("win");
    document.querySelector("h2").classList.remove("invisible");
    document.querySelector(".refresh").classList.remove("invisible");
    userCurrentScore++;
    document.querySelector(".yourScore").textContent = userCurrentScore;
  }

  function userLoses() {
    document.querySelector("h1").textContent = `Current Leader: ${
      userCurrentScore > computerCurrentScore ? "You" : "Computer"
    }`;
    document.querySelector(
      "h2"
    ).textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    document.querySelector("h2").classList.remove("win");
    document.querySelector("h2").classList.add("loose");
    document.querySelector("h2").classList.remove("invisible");
    document.querySelector(".refresh").classList.remove("invisible");
    computerCurrentScore++;
    document.querySelector(".computerScore").textContent = computerCurrentScore;
  }

  function draw() {
    document.querySelector("h2").textContent = "Draw!";
    document.querySelector("h2").classList.remove("invisible");
    document.querySelector(".refresh").classList.remove("invisible");
    document.querySelector("h2").classList.remove("win");
    document.querySelector("h2").classList.remove("loose");
  }
});

//LeaderBoard
document.querySelector("h1");
//Input
document.querySelector("input");
//Go Button
document.querySelector(".submit");
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
