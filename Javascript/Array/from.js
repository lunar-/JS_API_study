// Array.from() 메서드는 유사 배열 객체(array-like object) 나 반복 가능한 객체(iterable object) 를 얕게 복사해 새 배열을 만든다.
// console.log(Array.from("foo"));
// console.log(Array.from([1, 2, 3], (x) => x + x));
// ['f', 'o', 'o']
// [2, 4, 6]

// Syntax
// Array.from(arrayLike[, mapFn[, thisArg]])

// Parameters
// arrayLike
// 배열로 변환하고자 하는 유사 배열 객체나 반복 가능한 객체

// mapFn - optional
// 배열의 모든 요소에서 호출할 맵핑 함수

// thisArg - optional
// mapFn 이 동작 시 this 로 사용할 값

// Return value
// 새 Array 인스턴스

// 유사 배열 객체 array-like objec - length 속성과 인덱스된 요소를 가진 객체
// 반복 가능한 객체 iterable object - Map, Set 등 각 요소를 얻을 수 있는 객체

// Array.from(obj, mapFn, thisArg) 이 중간에 다른 배열(intermediate array)을 생성하지 않는다는 점만 제외하면 Array.from(obj).map(mapFn, thisArg) 와 같은 결과.
// 이건 특히 중요하다. typed array(형식화 배열?) 와 같은 특정 배열 서브클래스에서 중간 배열 (intermediate array) 값이 적절한 타입에 맞게 생략되기 때문에.

// from() 메서드의 length 속성은 1

// es2015 이후 클래스 상속이 가능해져 Array.from 과 같은 정적 메서드는 Array 의 서브클래스에 의해 상속되며 Array 대신 자신의 인스턴스를 만듬.

// EX1
// console.log(Array.from("foo"));
// ['f', 'o', 'o']

// EX2
const newSet = new Set(["foo", window]);
// console.log(Array.from(newSet));
// 여긴 그냥 js 파일 안이라 window 가 정의되지 않으나 브라우저 내에선 잘 동작은 함. 그냥 일반 테스트를 위해서라면 일반 객체를 넣는게 맞을듯.
// ["foo", Window]

// EX3
const m = new Map([
  [1, 2],
  [2, 4],
  [5, 6],
]);
// console.log(Array.from(m));
// [[1, 2], [2, 4], [5, 6]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
// console.log(Array.from(mapper.values()));
// console.log(Array.from(mapper.keys()));
// ['a', 'b']
// ['1', '2']

// EX4 - 유사 배열 객체(arguments)에서 배열 만들기
function f() {
  return Array.from(arguments);
}

// console.log(f(1, 2, 3));
// [1, 2, 3]

// 여기가 잘 이해가 안된다. f에서 받는 변수가 없는데 저렇게 받을 수 있는건가?

// EX5
// console.log(Array.from([1, 2, 3], (x) => x * x));
// [1, 4, 9]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
console.log(Array.from({ length: 5 }, (v, i) => i));
// [0, 1, 2, 3, 4]

// https://stackoverflow.com/questions/40528557/how-does-array-fromlength-5-v-i-i-work

// EX6 - 시퀀스 생성기(range)
// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 이런 종류의 이용이 낯선 것 같다. 유사 배열 객체? 그리고 함수의 이용

// Generate numbers range 0..4
// console.log(range(0, 4, 1));
// [0, 1, 2, 3, 4]

// Generate number range 1..10 with step of 2
// console.log(range(1, 10, 2));
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
// const alpahbetArray = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
//   String.fromCharCode(x)
// );
// 아래와 값이 똑같음.
const alpahbetArray = range("A".charCodeAt(0), "Z".charCodeAt(0), 1);
console.log(alpahbetArray);
// [
//   65, 66, 67, 68, 69, 70, 71, 72,
//   73, 74, 75, 76, 77, 78, 79, 80,
//   81, 82, 83, 84, 85, 86, 87, 88,
//   89, 90
// ]
console.log(alpahbetArray.map((x) => String.fromCharCode(x)));
// [
//   'A', 'B', 'C', 'D', 'E', 'F',
//   'G', 'H', 'I', 'J', 'K', 'L',
//   'M', 'N', 'O', 'P', 'Q', 'R',
//   'S', 'T', 'U', 'V', 'W', 'X',
//   'Y', 'Z'
// ]
