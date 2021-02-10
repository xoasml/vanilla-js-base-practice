// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const target = document.getElementById("js-target");
const html = document.querySelector("html");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseover: function () {
    target.innerHTML = "Mouse is on top";
    target.style.color = colors[0];
  },
  mouseout: function () {
    target.innerHTML = "Mouse is leaves";
    target.style.color = colors[1];
  },
  resize: function () {
    target.innerHTML = "Window is resize";
    target.style.color = colors[2];
  },
  mousedown: function (event) {
    if (event.buttons === 2) {
      target.innerHTML = "Right Click";
      target.style.color = colors[3];
    }
  },
};

target.addEventListener("mouseover", superEventHandler.mouseover);
target.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("resize", superEventHandler.resize);
html.addEventListener("mousedown", superEventHandler.mousedown);
