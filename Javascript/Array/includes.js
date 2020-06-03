// includes() 메소드는 배열이 특정 요소를 포함하고 있는지 판별.

const pets = ["cat", "dog", "bat"];
// console.log(pets.includes("cat"));
// console.log(pets.includes("at"));
// true
// false

// Syntax
// arr.includes(searchElement[, fromIndex])

// Parameters
// searchElement
// 탐색할 요소. 문자나 문자열을 비교할 때 대소문자 구분함.

// fromIndex - Optional
// 배열 내에서 searchElement 검색을 시작할 위치.
// 음의 값은 array.length + fromIndex 의 인덱스를 asc 로 검색
// 기본값은 0

// Return value
// Boolean
// false 값의 경우 sameValueZero 를 고려하지 않는다.
// Same value zero equality : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality
// 뭐시여 이게

// EX1
const arr1 = [1, 2, 3, NaN];
// console.log(arr1.includes(2));
// console.log(arr1.includes(5));
// console.log(arr1.includes(3, 4));
// console.log(arr1.includes(3, 10));
// console.log(arr1.includes(3, -2));
// console.log(arr1.includes(NaN));
// true
// false
// false
// false
// true
// true

// EX2
// array length is 4
// fromIndex is -100
// computed index is 4 + (-100) = -96
// 계산된 인덱스가 -1*array.length 보다 작거나 같으면 전체 배열이 검색.

// console.log(arr1.includes(1, -100));
// true;
console.log(arr1.includes(3, -5));
// 이런 경우 계산된 인덱스는 4-5 = -1 인데 이럼 전체 배열이 검색되면 안되는거 아닌가? 왜 전체 배열이 검색되는가

// EX3
// includes() 는 의도적으로 제네릭. 배열 객체가 되기위한 this 값을 요구하지 않아 다른 종류의 객체에 적용될 수 있다.(유사 배열 객체 등)
// 다음 예시는 이 함수의 arguments 객체로 호출되는 includes() 메소드를 보여줌.
(function () {
  console.log([].includes.call(arguments, "a"));
  console.log([].includes.call(arguments, "d"));
  // true
  // false
})("a", "b", "c");

// 이 부분을 좀 더 정확하게 이해하려면 call 도 봐야할듯.
