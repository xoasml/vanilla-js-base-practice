// import "./styles.css";

const timeEle = document.createElement("h2");
const body = document.querySelector("body");

function giveZero(number) {
  if (number < 10) {
    return (number = `0${number}`);
  }
  return number;
}

function minTimeParsing(minDate) {
  const sec = 1000;
  const min = 60000;
  const hour = min * 60;
  const day = hour * 24;

  const minDay = Math.floor(minDate / day);
  const minHour = Math.floor((minDate % day) / hour);
  const minMin = Math.floor((minDate % hour) / min);
  const minSec = Math.floor((minDate % min) / sec);

  return `${minDay}d ${giveZero(minHour)}h ${giveZero(minMin)}m ${giveZero(
    minSec
  )}s `;
}

function getDateMin(xmasDay, cTime) {
  return xmasDay.getTime() - cTime.getTime();
}
// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const cTime = new Date();

  timeEle.innerHTML = minTimeParsing(getDateMin(xmasDay, cTime));
}

function init() {
  body.appendChild(timeEle);
  setInterval(getTime, 1000);
}
init();
