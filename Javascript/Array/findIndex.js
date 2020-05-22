// findIndex() 메소드는 배열 내에서 주어진 테스트 함수를 만족하는 첫 번째 요소의 인덱스를 반환한다. 만족하는 요소가 없으면 -1 을 반환.

const array = [5, 12, 8, 140, 35];
const isLargeNumber = (num) => num > 13;

// console.log(array.findIndex(isLargeNumber));
// 3

// 인덱스 대신 값을 반환하는 find() 도 참고

// Syntax
// arr.findIndex(callaback(element[, index[, array]])[, thisArg])

// Parameters
// callback
// 조건을 만족하여 true 를 리턴할 때까지, 배열의 각 값에 동작하는 함수. 다음 3가지 인자를 가짐

// element
// 현재 처리중인 요소

// index - optional
// 현재 처리중인 요소의 인덱스

// array - optional
// findIndex() 를 호출한 배열

// thisArg - optional
// 콜백이 동작할 때 this 로 사용할 객체

// Return value
// 테스트를 통과하는 요소가 있다면 그 요소의 인덱스, 없다면 -1 을 리턴

// findIndex() 는 콜백이 true 값을 반환할 때까지 배열의 모든 인덱스(0 ~ lenght-1) 에 대해 한번씩 콜백을 실행시킨다.
// 콜백을 만족하는 요소를 찾으면 그 즉시 해당 요소의 인덱스를 리턴한다. 만약 만족하는 요소가 없거나 배열의 길이가 0일 경우 -1 을 리턴.
// Array.some 과 같은 다른 배열 메소드와 달리 배열에 존재하지 않는 엔트리의 인덱스에 대해서도 콜백이 호출.

// findIndex() 는 호출된 배열을 변경하지 않는다.

// findIndex() 에 의해 처리되는 요소의 범위는 콜백의 첫번째 호출 전에 설정.
// 콜백이 동작하기 시작한 후에 추가된 요소에는 콜백이 방문하지 않는다.
// 배열의 존재하고 있었고 아직 콜백이 방문하지 않았던 요소가 콜백에 의해 변경된 경우 콜백에 전달된 값은 findIndex() 가 해당 요소의 인덱스를 방문할 때 값이 됨
// 삭제된 요소에도 콜백이 방문.

// EX1
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
      return false;
    } else {
      start++;
    }
  }
  return element > 1;
}

// console.log([4, 6, 10, 16].findIndex(isPrime));
// console.log([4, 5, 13, 16].findIndex(isPrime));
// -1
// 1

// EX2
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
// console.log(index);
// 3
