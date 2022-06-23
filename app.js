const scoreNum = document.getElementById("scoreNum");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice");
const scoreText = document.getElementById("scoreText");

let score = 0;

roll.addEventListener("click", () => {
  rollDice = Math.floor(Math.random() * 6) + 1;
  if (rollDice == 1) {
    dice.src = "/images/dice1.png";
    scoreNum.innerText = "YOU LOSE";
    score = 0;
  } else if (rollDice == 2) {
    dice.src = "/images/dice2.png";
    score += 2;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
  } else if (rollDice == 3) {
    dice.src = "/images/dice3.png";
    score += 3;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
  } else if (rollDice == 4) {
    dice.src = "/images/dice4.png";
    score += 4;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
  } else if (rollDice == 5) {
    dice.src = "/images/dice5.png";
    score += 5;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
  } else if (rollDice == 6) {
    dice.src = "/images/dice6.png";
    score += 6;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
  }
  if (score >= 20) {
    scoreNum.innerText = score;
    scoreText.innerText = "YOU WIN!";
    score = 0;
  }
});
