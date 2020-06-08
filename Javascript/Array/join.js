// join() 메소드는 배열(이거나 유사 배열 객체)의 모든 요소를 연결해 새 문자열을 생성해서 리턴한다. 콤마나 특정 문자열로 스트링을 분리할 수 있음.
const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// Fire, Air, Water
// console.log(elements.join(""));
// FireAirWater
// console.log(elements.join("-"));
// Fire - Air - Water

// Syntax
// arr.join([seperator])

// Parameters
// seperator - Optional
// 배열의 각 요소를 구분할 문자열을 지정. 필요한 경우 문자열로 변환됨. 생략하면 배열의 요소들이 쉼표로 구분.
// seperator 가 빈 문자열이면 모든 요소들이 사이에 아무 문자없이 연결

// Return value
// 배열의 모든 요소를 연결한 하나의 문자열을 반환. arr.length 가 0 이면 빈 문자열을 반환.

// 요소가 undefined, null 이면 빈 문자열로 변환

// EX1
// console.log(elements.join());
// Fire, Air, Water
// console.log(elements.join(", "));
// Fire, Air, Water
// console.log(elements.join(" + "));
// Fire + Air + Water
// console.log(elements.join(""));
// FireAirWater

// EX2 - 유사 배열 객체. arguments 같은 것.
function f(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log(s);
}

f(1, "a", true);
// 1, a, true
