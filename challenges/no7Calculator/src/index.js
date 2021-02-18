const resultPanel = document.querySelector(".js-resultPanel");
const resetBtn = document.querySelector(".js-resetBtn");
const equalBtn = document.querySelector(".js-equalBtn");
const numBtn = document.getElementsByClassName("js-numBtn");
const mathBtn = document.getElementsByClassName("js-mathBtn");

const ZERO = 0;
const NONE_MATH_TYPE = "";

let saveNumber = ZERO;
let mathType = NONE_MATH_TYPE;
let resetFlag = false;

function numFormat(number) {
  number = number.replaceAll(",", "");
  return new Intl.NumberFormat().format(parseInt(number));
}

function resultPrint(btnNumber) {
  const panelNum = resultPanel.innerHTML;
  if (ZERO === parseInt(panelNum) || resetFlag) {
    resultPanel.innerHTML = btnNumber;
    resetFlag = false;
  } else {
    resultPanel.innerHTML = numFormat(panelNum + btnNumber);
  }
}

function mathCalc(panelNum) {
  const number = parseFloat(saveNumber);
  if (number === 0) {
    saveNumber = panelNum;
  } else {
    switch (mathType) {
      case "+":
        saveNumber = number + panelNum;
        break;
      case "-":
        saveNumber = number - panelNum;
        break;
      case "*":
        saveNumber = number * panelNum;
        break;
      case "/":
        saveNumber = number / panelNum;
        break;
    }
    resultPanel.innerHTML = saveNumber;
  }
}

function equalClickHandler() {
  const panelNum = parseFloat(resultPanel.innerHTML);
  mathCalc(panelNum);
  saveNumber = ZERO;
  resetFlag = true;
}

equalBtn.addEventListener("click", equalClickHandler);

function mathBtnClickHandler(event) {
  const panelNum = parseInt(resultPanel.innerHTML);
  if (panelNum !== ZERO) {
    mathType = event.target.innerHTML;
    resetFlag = true;
    mathCalc(panelNum);
  }
}

Array.from(mathBtn).forEach(function (mathButton) {
  mathButton.addEventListener("click", mathBtnClickHandler);
});

function numBtnClickHandler(event) {
  const btnNumber = event.target.innerText;
  resultPrint(btnNumber);
}

Array.from(numBtn).forEach(function (numberButton) {
  numberButton.addEventListener("click", numBtnClickHandler);
});

function resetBtnClickHandler() {
  resultPanel.innerHTML = ZERO;
  saveNumber = ZERO;
  mathType = NONE_MATH_TYPE;
}

resetBtn.addEventListener("click", resetBtnClickHandler);
