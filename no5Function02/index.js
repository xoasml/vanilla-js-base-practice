// '' 로 만드는 스트링과 ""로 만드는 스트링은 모양만 다르고 똑같다.
// 하지만 ''와 ""로는 할 수 없는 강력한 기능을 ``(백틱)이 가지고 있다.
// `` (백틱) 으로 스트링 만들기.
// 변수를 입력하고 싶으면 ${변수명}
function sayHelloUp(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}
// argument(인수)작성
sayHelloUp("태훈", 15);

// return : 함수에서 가공된 데이터를 반환할때 사용
function sayHelloReturn(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
const helloTH = sayHelloReturn("Taehoon", 14);
console.log(helloTH);

const calc = {
  plus: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  multi: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  pow: function (a, b) {
    let result = a;

    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  },
};

console.log(`plus ${calc.plus(2, 4)}`);
console.log(`sub ${calc.sub(2, 4)}`);
console.log(`multi ${calc.multi(2, 4)}`);
console.log(`div ${calc.div(2, 4)}`);
console.log(`pow ${calc.pow(2, 4)}`);
