// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selector = document.querySelector("select");

const COUNTRY = "country";

function loadSelectCountry() {
  const loadCountry = localStorage.getItem(COUNTRY);

  if (loadCountry === null) {
    selector.value = "noneData";
  } else {
    selector.value = loadCountry;
  }
}

function saveSelectCountry(selected) {
  localStorage.setItem(COUNTRY, selected);
}

function selectHandler(event) {
  const selected = selector.value;
  saveSelectCountry(selected);
}

function init() {
  loadSelectCountry();
  selector.addEventListener("change", selectHandler);
}

init();
