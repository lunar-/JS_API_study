// find() 메소드는 주어진 테스트 함수를 만족하는 배열의 첫번째 요소의 값을 리턴한다. 아니라면 undefined 를 리턴

const array = [5, 30, 2, -1, 0, 599];
const found = array.find((element) => element > 10);
// console.log(found);
// 30

// 비교
// find() 는 요소의 값을 리턴 vs findIndex() 메소드는 값 대신 인덱스를 리턴
// 배열안 요소의 위치를 찾고 싶을 때는 indexOf()
// 배열 안에 해당 요소가 존재하는지 확인하고 싶을 땐 indexOf(), includes() 를 사용

// Syntax
// arr.find(callback(element[, index[, array]])[, thisArg])

// Parameters
// callback
// 배열의 각 값을 처리할 함수. 아래의 세 인자를 갖는다.

// element
// 콜백이 현재 처리중인 요소

// index - optional
// 콜백이 현재 처리중인 요소의 인덱스

// array - optional
// find() 함수를 호출한 배열

// thisArg - optional
// 콜백이 동작할 때 this 로 사용할 객체

// Return Value
// 주어진 테스트 함수를 만족하는 첫 번째 요소의 값. 그 외에는 undefined 를 리턴

// find() 는 콜백이 true 를 반환할 때까지 배열의 각 요소별로 콜백이 실행된다.
// 만약 특정 값을 찾으면 해당 요소의 값을 그 즉시 반환. 아니면 undefined 를 반환한다.

// 콜백은 배열의 0번 인덱스 부터 length - 1 인덱스까지 모든 인덱스에 대해 동작한다. 값이 할당되지 않은 요소도 포함.
// 이것은 희소 배열(sparse array) 의 경우 값이 할당된 요소만 탐색하는 다른 메소드에 비해 더 비효율적.

// thisArg 가 주어졌을 경우 thisArg 가 콜백 안에서 this 로 사용되고 그렇지 않은 경우 undefined 가 this 로 사용

// find 는 호출한 대상 배열을 변경하지 않는다.

// find 가 처리할 요소의 범위는 콜백이 첫 동작하기 전에 결정. find 가 실행된 이후에 추가된 요소에는 콜백이 방문하지 않는다.
// 기존에 존재하던 요소 중 콜백이 방문하지 않았던 요소가 콜백에 의해 변경된 경우 find 가 해당 요소의 인덱스를 방문할 때의 값으로 콜백함수에 전달.
// -> 이게 대체 무슨 말인지 잘 이해가 안감. 영어도, 한국어도 모르겠다.
// 삭제된 요소에도 콜백이 방문.

// EX1
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function findCherries(fruit) {
  return fruit.name === "cherries";
}

const cherries = inventory.find(findCherries);
// console.log(cherries);
// { name: 'cherries', quantity: 5 }

// EX2
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

// console.log([4, 6, 12].find(isPrime));
// console.log([4, 7, 13].find(isPrime));
// undefined
// 7

// EX3 - 탐색 중 삭제된 배열의 요소
const arr = [0, 1, , , , 5, 6];

arr.find((value, index) => {
  console.log("Visited index : " + index + " with value " + value);
  if (value == 1) return true;
});
// Visited index: 0 with value 0
// Visited index: 1 with value 1
// Visited index: 2 with value undefined
// Visited index: 3 with value undefined
// Visited index: 4 with value undefined
// Visited index: 5 with value 5
// Visited index: 6 with value 6

arr.find((value, index) => {
  if (index == 0) {
    console.log("== Deleting arr[5] with value " + arr[5]);
    delete arr[5];
  }
  console.log("Visited index : " + index + " with value " + value);
});
// == Deleting arr[5] with value 5
// Visited index: 0 with value 0
// Visited index: 1 with value 1
// Visited index: 2 with value undefined
// Visited index: 3 with value undefined
// Visited index: 4 with value undefined
// Visited index: 5 with value undefined
// Visited index: 6 with value 6
