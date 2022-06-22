const scoreNum = document.getElementById("scoreNum");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice");

let score = 0;
scoreNum.innerText = score;
roll.addEventListener("click", () => {
  rollDice = Math.floor(Math.random() * 6) + 1;
  if (rollDice == 1) {
    dice.src = "/images/dice1.png";
    score += 1;
  } else if (rollDice == 2) {
    dice.src = "/images/dice2.png";
    score += 2;
  } else if (rollDice == 3) {
    dice.src = "/images/dice3.png";
    score += 3;
  } else if (rollDice == 4) {
    dice.src = "/images/dice4.png";
  } else if (rollDice == 5) {
    dice.src = "/images/dice5.png";
  } else if (rollDice == 6) {
    dice.src = "/images/dice6.png";
  }
});
