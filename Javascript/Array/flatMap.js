// experimental now
// flatMap() 메소드는 먼저, 매핑 함수를 이용해 각 엘리먼트에 대해 map 수행(?) 후, 결과를 새로운 배열로 평탄화.
// 이는 깊이 1의 flat 이 뒤따르는 map 과 동일하지만, flatMap 은 많은 경우 꽤 유용하며 둘을 하나의 메소드로 병합할 때 조금 더 효율적

// Syntax
// arr.flatMap(callback(currentValue[, index[, array]])[, thisArg])

// Parameters
// callback
// 새로운 배열의 엘리먼트를 생성하는 함수. 다음 세 가지 인자를 가진다.

// currentValue
// 배열에서 현재 처리중인 엘리먼트

// index - optional
// 배열에서 현재 처리중인 엘리먼트의 인덱스

// array - optional
// map 이 호출된 배열

// thisArg - optional
// 콜백 실행 시 this 로 사용할 값

// Return value
// 각 엘리먼트가 콜백 함수의 결과이고 깊이 1로 평탄화된 새로운 배열

// 콜백 함수의 상세한 설명은 array.map() 을 참조.

// EX1
const arr1 = [1, 2, 3, 4];
// console.log(arr1.map((x) => [x * 2]));
// [[2], [4], [6], [8]]
// console.log(arr1.flatMap((x) => [x * 2]));
// [2, 4, 6, 8]
// console.log(arr1.flatMap((x) => [[x * 2]]));
// [[2], [4], [6], [8]] // 한 레벨만 평탄화됨

const arr2 = ["it's Sunny in", "", "California"];
// console.log(arr2.map((x) => x.split(" ")));
// [["it's", 'Sunny', 'in'], [''], ['California']]
// console.log(arr2.flatMap((x) => x.split(" ")));
// ["it's", 'Sunny', 'in', '', 'California']

// EX2
// flatMap() 의 대안으로 쓸 수 있는 방법
// console.log(arr1.flatMap((x) => [x * 2]));
// [2, 4, 6, 8]
// console.log(arr1.reduce((acc, x) => acc.concat([x * 2]), []));
// [2, 4, 6, 8]
