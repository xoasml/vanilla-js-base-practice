if ("10" === 10) {
  console.log("hi");
} else if (10 === 11) {
  console.log("ho");
} else {
  console.log("lalalal");
}

if (1 === 1 && "태훈" === "태훈") {
  console.log("짜잔!");
} else {
  console.log("nope");
}

if (25 !== 25 || "태훈" === "태훈") {
  console.log("짜장!");
} else {
  console.log("nope");
}

const age = prompt("몇살이에요?");

if (age >= 18 && age <= 21) {
  console.log("you can drink");
} else if (age > 21) {
  console.log("you can not drink");
} else {
  console.log("too young");
}
