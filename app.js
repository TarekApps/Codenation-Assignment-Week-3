const scoreNum = document.getElementById("scoreNum");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice");
const scoreText = document.getElementById("scoreText");

let score = 0;

roll.addEventListener("click", () => {
  rollDice = Math.floor(Math.random() * 6) + 1;
  if (rollDice == 1) {
    dice.src = "/images/dice1.png";
    scoreText.innerText = "YOU LOSE";
    roll.innerText = "PLAY AGAIN?";
    score = 0;
  } else if (rollDice == 2) {
    dice.src = "/images/dice2.png";
    score += 2;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
    roll.innerText = "Roll the dice!";
  } else if (rollDice == 3) {
    dice.src = "/images/dice3.png";
    score += 3;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
    roll.innerText = "Roll the dice!";
  } else if (rollDice == 4) {
    dice.src = "/images/dice4.png";
    score += 4;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
    roll.innerText = "Roll the dice!";
  } else if (rollDice == 5) {
    dice.src = "/images/dice5.png";
    score += 5;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
    roll.innerText = "Roll the dice!";
  } else if (rollDice == 6) {
    dice.src = "/images/dice6.png";
    score += 6;
    scoreNum.innerText = score;
    scoreText.innerText = "Score";
    roll.innerText = "Roll the dice!";
  }
  if (score >= 20) {
    scoreNum.innerText = score;
    scoreText.innerText = "YOU WIN!";
    roll.innerText = "PLAY AGAIN?";
    score = 0;
  }
});
