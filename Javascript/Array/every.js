// every() 메소드는 모든 요소가 테스트 함수를 통과하는지 테스트하는 메소드.
// 이 메소드는 빈 배열에 어떤 condition(이건 뭐라고 해석해야하지) 을 넣든 true 를 반환한다.

const isBelowThreshold1 = (currentValue) => currentValue < 40;
const isBelowThreshold2 = (currentValue) => currentValue < 20;
const array1 = [1, 30, 28, 10, 13, 27];
// console.log(array1.every(isBelowThreshold1));
// console.log(array1.every(isBelowThreshold2));
// true
// false

// Syntax
// arr.every(callback(element[, index[, array]])[, thisArg])

// Parameters
// callback
// 각 요소들을 테스트할 함수

// element
// array 안에서 현재 처리중인 요소

// index - Optional
// 현재 처리중인 요소의 인덱스

// array - Optional
// The array every was called upon. 무슨 뜻이지. every 로 호출된 array?

// thisArg - Optional
// Value to use as this when executing callback. 영어 해석이 안됨.. 콜백 동작중에 뭐시기?

// Return value
// array 의 모든 요소가 테스트 함수에서 true 를 얻으면 true, 아니면 false 를 반환

// every() 는 콜백 함수를 각각 요소별로 한번씩 실행시킨다. 하나의 false 값이 나올 때 까지. 한개라도 false 값을 찾으면 그 즉시 false 값을 반환한다.
// 모든 요소들을 다 검사하고 난 뒤 전부 true 값이어야 true 값이 반환됨. -> 각각 함수 동작의 횟수의 차이가 있다.
// 콜백은 array 안에서 값을 가진 index 에만 동작하고, 값이 지워졌거나 할당되지 않은 인덱스는 동작하지 않는다.
// 콜백은 세가지 인자값과 함께 동작한다. - the value of the element, the index of the element, the array object being traversed. <- 현재 돌고 있는 배열?

// 'thisArg' 파라미터가 'every' 를 제공하면 콜백의 'this' 값으로 사용될 것이다. 그렇지 않으면 'undefined' 가 'this' 값으로 사용될 것이다.
// callback 에 의해 최종적으로 보여지는 this 는 function 내의 기본적인 this 의 룰에 따라 정해진다. 이게 뭔말이야.
// every 는 array 를 변화시키지 않는다.

// every 에 의해 처리되는 요소의 범위는 콜백이 처음 동작하기 전에 설정된다. every 가 콜한 다음에 array 에 추가된 요소는 콜백이 찾아가지(?) 않는다.
// 만약 array 안에 이미 존재하던 요소가 변경되면 그들의 callback 값은 every 가 지나가는 순간의 값이 될 것이다. 이게 맞는 말이오?
// 지워진 요소에는 방문하지 않는다.

// every 는 'for all' quantifier 처럼 행동한다. 특히 빈 배열에서는 true 를 리턴한다.

// EX1
const isBiggerThan10 = (element, index, array) => element >= 10;

console.log([23, 5, 34, 65, 139].every(isBiggerThan10));
console.log([23, 11, 34, 65, 139].every(isBiggerThan10));
// false
// true

// every() 안에서 바로 선언해서 하는 방법
console.log([23, 5, 34, 65, 139].every((e) => e >= 10));

// EX2
const array2 = [
  { a: 1, b: 2, c: 3, d: 4 },
  { a: 1, x: 2, y: 3, z: 4 },
  { a: 1, x: 2, y: 3, z: 4 },
];
const array3 = [
  { a: 1, b: 2, c: 3, d: 4 },
  { a: 1, x: 2, y: 3, z: 4 },
  { a: 2, x: 2, y: 3, z: 4 },
];

console.log(array2.every((obj) => obj.a === 1));
console.log(array3.every((obj) => obj.a === 1));
// false
// true
