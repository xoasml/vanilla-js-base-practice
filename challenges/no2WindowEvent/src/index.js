const screen = document.getElementById("screen");

function resizeHandler(event) {
  const innerWidth = event.target.innerWidth;
  if (innerWidth < 450) {
    screen.style.backgroundColor = "tomato";
  }
  if (innerWidth < 600 && innerWidth > 450) {
    screen.style.backgroundColor = "blue";
  }
  if (innerWidth > 600) {
    screen.style.backgroundColor = "teal";
  }
}

window.addEventListener("resize", resizeHandler);
