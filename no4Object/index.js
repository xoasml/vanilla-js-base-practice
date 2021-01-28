// 배열을 만들때는 [] 안에 데이터를 넣어주면 된다.
const privateData = ["TaeHoon", "32", true, "Seoul"];

// Object(객체)를 만들 때는 {} 안에 작성한다.
const hoonsInfo = {
  name: "Taehoon",
  age: 32,
  gender: "Male",
  isHandsome: true,

  // Object에 배열을 넣는게 가능함.
  favMovies: ["타짜", "점퍼", "해리포터"],

  //Object를 넣는것도 가능.
  languageLv: {
    java: 5,
    javaScript: 1,
    HTML: 2,
    CSS: 2,
  },

  favFood: [
    {
      name: "짜장면",
      fatty: true,
    },
    {
      name: "김치",
      fatty: false,
    },
  ],
};

// Object의 전체 데이터를 다 보여준다
console.log(hoonsInfo);

// Object에서 원하는 데이터를 보여준다.
console.log(hoonsInfo.gender);

// Object안에 있는 데이터를 수정도 가능하다.
hoonsInfo.gender = "Female";
console.log(hoonsInfo.gender);

console.log(hoonsInfo.favFood[1].name);
console.log(hoonsInfo.languageLv.java);
