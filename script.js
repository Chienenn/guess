"use strict";

/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎊Correct Number!!";

document.querySelector(".guess");*/

let number = Math.trunc(Math.random() * 20) + 1; //先在外部設定神秘數字
let score = 20;
let highscore = 0; //初始設定0
//重複的敘述太多可以把它存在function裡
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value); //印出來預設都是string轉換成int(後面要跟某個數字比較)
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(".message").textContent = "⛔️No number!";
    displayMessage("⛔️No number!");
  } else if (guess === number) {
    displayMessage("🎊Correct Number!!!");
    //document.querySelector(".message").textContent = "🎊Correct Number!!!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#ff0000";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score; //當分數>最高得分時 把最高得分設為目前分數
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "It's toooo HIGH!!" : "It's toooo Low!!");
      /*document.querySelector(".message").textContent =
        guess > number ? "It's toooo HIGH!!" : "It's toooo Low!!";*/
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢You lost the game");
      //document.querySelector(".message").textContent = "😢You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } /* else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "It's toooo Low!!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢You lost the game";
      document.querySelector(".score").textContent = 0;
    }*/
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let number = Math.trunc(Math.random() * 20) + 1; //先在外部設定神秘數字
  document.querySelector("body").style.backgroundColor = "#bc8f8f";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  //document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "❓";
  document.querySelector(".guess").value = " ";
});
