// filter() 메소드는 테스트 함수를 통과한 모든 배열로 이루어진 새 배열을 리턴한다.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const longWords = words.filter((word) => word.length > 6);
// console.log(longWords);
// ['exuberant', 'destruction', 'present']

// Syntax
// const newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

// Parameter
// callback
// 배열의 모든 요소를 테스트하는 함수. 테스트 함수에서 true 를 얻으면 요소를 그대로 유지한다. false 를 얻으면 아래 세가지 인자를 받음

// element
// 지금 배열 안에서 처리중인 요소

// index - optional
// 현재 처리중인 요소의 인덱스

// array - optional
// filter 를 호출했던 배열

// thisArg - optional
// callback 이 동작하는 동안 this 로 사용할 값

// Return value
// callback 을 통과한 요소들로 이루어진 새 배열. 테스트에 통과한 요소가 없을 경우 빈 배열을 리턴

// filter() 는 callback function 을 각 요소별로 한번씩 호출한다. 그리고 리턴할 새 배열을 생성한다.
// callback 은 오직 배열의 인덱스(값을 할당받은 요소의 인덱스)에 따라 동작한다.
// 지워졌거나 값을 할당받지 않은 인덱스에는 동작하지 않는다.
// 테스트 함수에 통과되지 않은 요소는 단순히 건너뛰어지며, 리턴될 새 배열에도 들어가지 않는다.

// callback 은 다음 세가지 인자로 동작한다.
// the value of the element
// the index of the element
// the Array object being traversed

// thisArg 가 filter 에 제공된 경우 그 값는 callback 의 this 값으로 이용된다.
// 그 외에 undefined 도 this 값으로 이용될 수 있다.
// The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.
// 최후로 관찰될 수 있는 callback 의 this 값은 this 를 결정하는 평소의 규칙에 따른다.

// filter() 는 기존 배열을 변화시키는 메소드가 아님.

// filter() 가 적용되는 요소의 범위는 callback 이 처음 동작하기 전에 정해진다. filter() 가 호출된 뒤 추가된 array 의 요소에는 callback 이 들르지 않는다.
// If existing elements of the array are changed, or deleted, their value as passed to callback will be the value at the time filter() visits them; elements that are deleted are not visited.
// 배열의 기존 요소가 변경 혹은 삭제된 경우 callback 에 전달된 값은 filter() 가 방문한 시점의 값이 됨. 삭제된 요소엔 방문하지 않는다.

// EX1
function isBigEnough(value) {
  return value >= 10;
}

var filteredArray = [10, 4, 28, -1, 300].filter(isBigEnough);
// console.log(filteredArray);
// [10, 28, 300]

// EX2
const array = [
  { id: 15 },
  { id: -1 },
  { id: 3 },
  { id: 0 },
  { id: 378 },
  { id: 15.7 },
  {},
  { idx: 1 },
  { id: null },
  { id: NaN },
  { id: undefined },
];

let invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}

function filterById(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrById = array.filter(filterById);
// console.log(arrById);
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 378 }, { id: 15.7 }]
// console.log(invalidEntries);
// 6

// EX3
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(query) {
  return fruits.filter((item) => {
    return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

const arrayByAp = filterItems("ap");
const arrayByAn = filterItems("an");
// console.log(arrayByAp);
// console.log(arrayByAn);
// ['apple', 'grapes']
// ['banana', 'mango', 'orange']
