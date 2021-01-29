// DOM : Document Object Modul
/* 자바 스크립트로 html 엘리먼트에 간섭하기.*/

// document
document.title = "Modify the DOM with JS";

// getElementById id로 엘리먼트 찾기.
const title1 = document.getElementById("title");
title1.innerHTML = "Hi! From JS";
title1.style.color = "tomato";

// getElementsByClassName
const title2 = document.getElementsByClassName("test");
// class는 유일값이 아니기 때문에 배열의 형태로 주어진다.
title2[0].style.color = "tomato";

// quertSelector
const tester = document.querySelector("#content");
tester.innerHTML = 'querySelector ID : "#name" ';
tester1 = document.querySelector(".content");
tester1.innerHTML = "querySelector Class : '.name' ";
