// indexOf() 메서드는 배열에서 지정된 요소가 있을 경우 그 첫 번째 인덱스를 반환하고 없으면 -1 을 반환

const fruits = ["apple", "melon", "orange", "pineapple", "apple"];
// console.log(fruits.indexOf("apple"));
// console.log(fruits.indexOf("apple", 2));
// console.log(fruits.indexOf("pear"));
// 0
// 4
// -1

// Syntax
// arr.indexOf(searchElement[, fromIndex])

// Parameters
// searchElement
// 배열에서 찾을 요소

// fromIndex - Optional
// 검색을 시작할 인덱스. fromIndex 가 배열의 길이보다 크거나 같은 경우 -1이 반환되므로 배열이 검색되지 않음.
// fromIndex 가 음수면 배열 끝에서부터 오프셋 값으로 이용. 그래도 검색 방향은 앞에서부터 뒤로.
// 계산된 인덱스가 0보다 작으면 배열 전체가 검색. 기본값이 0

// Return value
// 배열 내 해당 요소의 첫 번째 인덱스. 없으면 -1

// indexOf() 는 엄격한 동등성(strict equality, === 또는 트리플 연산자에서 사용하는 것과 같은 메서드)을 사용하여 검색 요소를 배열의 요소와 비교.

// EX1
let indices = [];
const arr1 = ["a", "b", "a", "c", "d", "a"];
const searchElement = "a";
let idx = arr1.indexOf(searchElement);
while (idx !== -1) {
  indices.push(idx);
  idx = arr1.indexOf(searchElement, idx + 1);
}
// console.log(indices);
// [0, 2, 5]

// EX2
function updateVeggiCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) == -1) {
    veggies.push(veggie);
    console.log("추가된 야채야채 모듬 : ", veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + "는 이미 야채야채 모듬에 있어요.");
  }
}

let veggies = ["tomato", "potato", "green-pepper"];
updateVeggiCollection(veggies, "spinach");
updateVeggiCollection(veggies, "asparagus");
updateVeggiCollection(veggies, "asparagus");
// 추가된 야채야채 모듬: ['tomato', 'potato', 'green-pepper', 'spinach']
// 추가된 야채야채 모듬: ['tomato', 'potato', 'green-pepper', 'spinach', 'asparagus']
// asparagus는 이미 야채야채 모듬에 있어요.
