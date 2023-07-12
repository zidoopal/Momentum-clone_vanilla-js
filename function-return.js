// function - console.log 와 return 의 차이 / 의미!

// const calculator = {
//   add: function (a, b) {
//     console.log(`a + b = ${a + b}`);
//   },
//   minus: function (a, b) {
//     console.log(`a - b = ${a - b}`);
//   },
//   mul: function (a, b) {
//     console.log(`a * b = ${a * b}`);
//   },
//   div: function (a, b) {
//     console.log(`a / b = ${a / b}`);
//   },
//   power: function (a, b) {
//     console.log(`a ** b = ${a ** b}`);
//   },
// };

// calculator.add(2, 4);
// calculator.minus(2, 4);
// calculator.mul(2, 4);
// calculator.div(2, 4);
// calculator.power(2, 4);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multi: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

// caculator.add(2, 4);
// 그냥 이렇게만 하면 console에는 출력이 안됨
// 변수에 담아서 변수를 출력해야 콘솔에서 출력되는 값을 볼 수 있음
// const plusResult = calculator.add(2, 4);
// console.log(calculator.add(2, 4));

// const minusResult = caclulator.minus(2, 4);
// console.log(calculator.minus(2, 4));

// const multiResult = calculator.multi(2, 4);
// console.log(calculator.multi(2, 4));

// const divResult = calculator.div(2, 4);
// console.log(calculator.div(2, 4));

// const powerResult = calculator.power(2, 4);
// console.log(calculator.power(2, 4));

// ❔ 근데 이렇게 결국 console.log 쓸거면 맨 위의 코드랑 결국 다를 것이 무엇?
// 👉 가장 큰 차이는 함수 내부에서 console.log를 사용하지 않은 것. return 을 사용함

// ❔❔ return 하는 것이 무슨 의미인데?
// 👉 함수가 실행되고 끝났을 때 너한테 반환 값을 줘. 너가 그 값을 사용할 수 있어.
// 👉 console.log 로 출력되는 값으로는 콘솔에서는 값을 보여주기만 할 뿐, 그 결과값을 얻을 수 없어! (==그 값을 사용할 수 없음)
// ㅋㅋㅋ 댓글에 console.log는 그림의 떡, 꺼내먹으려면 return 필요하다는 말 👍

// 변수에 함수를 할당하면, (함수에 return값이 있을 경우) 그 함수의 return 값을 갖게 됨!
// 🚫 그리고 return을 하면, function 은 작동을 멈추고 결과 값을 return 후 작동 STOP 🚫 !!!
const plusResult = calculator.add(4, 2);
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 5);
console.log(minusResult);
const multiResult = calculator.multi(3, minusResult);
console.log(multiResult);
const divResult = calculator.div(plusResult, minusResult);
console.log(divResult);
const powerResult = calculator.power(1, divResult);
console.log(powerResult);

// 한국나이 구하기
const age = 100;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);
