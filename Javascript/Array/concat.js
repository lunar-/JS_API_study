// concat() 은 2개나 그 이상의 array 를 병합하는 메소드. 이 메소드는 기존의 배열은 변화시키지 않고 새로운 배열을 리턴한다.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

//console.log(array3);
// ["a", "b", "c", "d", "e", "f"]

// Syntax
// var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

// Parameter
// valueN - Optional
// array 나 value 를 하나의 새 array 로 연결하는 역할. valueN 이 undefined 일 때 concat() 은 현재 배열의 shallow copy 를 리턴한다.

// Return value
// new Array

// concat() 은 기존 배열의 레퍼런스 값만 복사하기 때문에 오리지널과 새 배열이 같은 오브젝트를 바라봄. 이 오브젝트의 값이 변경되면 오리지널과 새 배열의 값이 다 변경됨.
// string, number 와 같이 데이터 타입은 값을 복사해 새 배열을 만듬.
// 이게 짱 중요하겠다.

// Ex1
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const concatArray = alpha.concat(numeric);
// console.log(concatArray);
// ["a", "b", "c", 1, 2, 3]

// Ex2
const num1 = [1, 2, 3],
  num2 = [4, 5, 6],
  num3 = [7, 8, 9];

const nums = num1.concat(num2, num3);
// console.log(nums);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Ex3
const alpha2 = ["a", "b", "c"];

const alphaNumeric = alpha.concat(1, [2, 3]);
// console.log(alphaNumeric);
// ['a', 'b', 'c', 1, 2, 3]

// Ex4
const num11 = [[1]];
const num12 = [2, [3]];

var concatNums = num11.concat(num12);

// console.log(concatNums);
// [[1], 2, [3]]

num11[0].push(4);
console.log(concatNums);
// [[1, 4], 2, [3]]
