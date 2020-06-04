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
// Values of zero are all considered to be equal regardless of sign(that is, -0 is considered to be equal to both 0 and + 0), but false is not considered to be the same as 0.
// false 값의 경우 sameValueZero 를 고려하지 않는다.
// 엄밀이 따지면 includes() 는 sameValueZero 알고리즘을 사용하여 주어진 요소가 발견되었는지 여부를 결정한다.
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
//    => 이 설명이 틀렸다. 계산된 인덱스(computed index) 가 아니라 입력된 fromIndex 값임. 계산된 인덱스는 어쨌든 음수가 나오면 인덱스 0으로 셋팅됨.

// console.log(arr1.includes(1, -100));
// true;
console.log(arr1.includes(3, -5));
// 이런 경우 계산된 인덱스는 4-5 = -1 인데 이럼 전체 배열이 검색되면 안되는거 아닌가? 왜 전체 배열이 검색되는가
//    => 계산된 인덱스가 음수이기 때문에 시작 인덱스는 0으로 셋팅되어 0부터 검색하기 때문.

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

// includes() polyfill
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, "includes", {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let obj be ? toObject(this value)
      const obj = Object(this);

      // 2. Let thisLength be ? toLength(? Get(0, "length"))
      const thisLength = obj.length >>> 0;
      // 오른쪽 시프트. 비트를 오른쪽으로 이동시키고 새 비트는 0. 시프트 연산에 대한 공부가 필요
      // https://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it
      // 설명을 봐도 잘 이해가 안됨 영어라 그런가

      // 3. if thisLength is 0, return false
      if (thisLength === 0) {
        return false;
      }

      // 4. Let thisStartIndex be ? toInteger(fromIndex)
      //    (if fromIndex is undefined, this step produces the value 0)
      const thisStartIndex = fromIndex | 0;

      // 5. If thisStartIndex >== 0,
      //    a. Let k be thisStartIndex
      // 6. Else thisStartIndex < 0,
      //    a. Let k be thisLength + thisStartIndex
      //    b. If k < 0, let k be 0 <= 여기다 여기!!!!! 어쨌든 k 는 가장 작은 수가 0일 수 밖에 없음. 음수가 되지 않음.
      let k = Math.max(
        thisStartIndex >= 0
          ? thisStartIndex
          : thisLength - Math.abs(thisStartIndex),
        0
      );

      // 여기가 의미하는 것는 무엇이지
      function sameValueZero(x, y) {
        return (
          x === y ||
          (typeof x === "number" &&
            typeof y === "number" &&
            isNaN(x) &&
            isNaN(y))
        );
      }

      // 7. Reapeat, shile k < thisLength
      while (k < thisLength) {
        // a. Let elementK be the result of ? Get(0, ! ToString(k))
        // b. If sameValueZero(searchElement, elementK) is true, return true
        if (sameValueZero(searchElement, obj[k])) {
          return true;
        }
        // c. Increase k by 1
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}

// from : https://www.ecma-international.org/ecma-262/7.0/#sec-samevaluezero

// SameValueZero(x, y)

// 1. If Type(x) is different from Type(y), return false.
// 2. If Type(x) is Number, then
//    a. If x is NaN and y is NaN, return true.
//    b. If x is +0 and y is -0, return true.
//    c. If x is -0 and y is +0, return true.
//    d. If x is the same Number value as y, return true.
//    e. Return false.
// 3. Return SameValueNonNumber(x, y).

// => SameValueZero differs from SameValue(x, y) only in its treatment of +0 and -0.
//    different this part : If x is +0 and y is -0, return false.
//                          If x is - 0 and y is + 0, return false.

// SameValueNonNumber(x, y)
// x 와 y 가 number 값이 아닐 때.

// 1. Assert: Type(x) is not Number.
// 2. Assert: Type(x) is the same as Type(y).
// 3. If Type(x) is Undefined, return true.
// 4. If Type(x) is Null, return true.
// 5. If Type(x) is String, then
//    a. If x and y are exactly the same sequence of code units(same length and same code units at corresponding indices), return true; otherwise, return false.
// 6. If Type(x) is Boolean, then
//    a. If x and y are both true or both false, return true; otherwise, return false.
// 7. If Type(x) is Symbol, then
//    a. If x and y are both the same Symbol value, return true; otherwise, return false.
// 8. Return true if x and y are the same Object value.Otherwise, return false.

console.log(9);
console.log(undefined >>> 0);
