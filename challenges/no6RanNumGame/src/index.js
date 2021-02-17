const range = document.querySelector(".js-range");
const betweenText = document.querySelector(".js-betweenText");
const frame = document.querySelector(".js-frame");
const playerNum = document.querySelector(".js-playerNum");
const numberText = document.querySelector(".js-numberText");
const resultText = document.querySelector(".js-resultText");

function comparePlayerNumtoRanNum(pNum, rNum) {
  pNum = parseInt(pNum);
  rNum = parseInt(rNum);
  if (pNum === rNum) {
    return "You Won!";
  } else {
    return "You lost!";
  }
}

function makeRandomNumber() {
  const number = parseInt(range.value) + 1;
  return parseInt(Math.random() * number);
}

function printText() {
  const pNum = playerNum.value;
  const rNum = makeRandomNumber();
  numberText.innerHTML = `You chose:${pNum}, the machine chose: ${rNum}.`;
  resultText.innerHTML = comparePlayerNumtoRanNum(pNum, rNum);
}

function setText() {
  betweenText.innerHTML = range.value;
}

function btnClickHandler(event) {
  event.preventDefault();
  printText();
}

frame.addEventListener("submit", btnClickHandler);

function ragneChangeHandler() {
  setText();
}

range.addEventListener("pointermove", ragneChangeHandler);

function init() {
  setText();
}

init();
