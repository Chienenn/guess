"use strict";

let number = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0; 
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value); 
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("⛔️No number!");
  } else if (guess === number) {
    displayMessage("🎊Correct Number!!!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#ff0000";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score; 
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "It's toooo HIGH!!" : "It's toooo Low!!");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  } 
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let number = Math.trunc(Math.random() * 20) + 1; 
  document.querySelector("body").style.backgroundColor = "#bc8f8f";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "❓";
  document.querySelector(".guess").value = " ";
});
