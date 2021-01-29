// click resize submit input change load before closing printing
// 등 많은 것들이 전부 다 이벤트이다.

function handleResize() {
  console.log("I Have been resized");
}

// window.addEventListener 이벤트를 인터셉트한다.

// 창을 리 사이징 할때 펑션을 실행한다.
window.addEventListener("resize", handleResize);
// handleResize()를 하면 이벤트가 발생하기도 전에 펑션이 실행된다.
// handleResize로 해주어야 한다.

function handleResize2(event) {
  console.log(window.innerWidth);
}
window.addEventListener("resize", handleResize2);

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
