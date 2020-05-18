// fill() 메소드는 시작 인덱스부터 마지막 인덱스까지 모든 요소를 특정 값으로 채운다.

const array1 = [1, 2, 3, 4];
// console.log(array1.fill(7, 2, 4));
// console.log(array1.fill(9, 1));
// [1, 2, 7, 7]
// [1, 9, 9, 9]

// Syntax
// arr.fill(value[, start[, end]])

// Parameters
// value
// array 에 채울 값

// start - optional
// 시작 인덱스. 디폴트 값은 0

// end - optional
// 마지막 인덱스. 디폴트 값은 arr.length

// 만약 start 가 음수면 start 값은 length+start 와 같음
// 만약 end 가 음수면 end 값은 length+end 와 같음

// fill 은 의도적인 제네릭. array 가 되는 this 값을 필요로 하지 않음(?)
// fill 은 변화시키는 메소드. 값을 복사해서 리턴하는게 아니라 본 object 를 직접 변화시키고 이를 리턴한다.
// fill 이 지나가면 레퍼런스 값도 복사하고 레퍼런스가 가리키는 객체 array 값도 특정 값으로 채움.

// console.log([1, 2, 3].fill(4)); // [ 4, 4, 4 ]
// console.log([1, 2, 3].fill(5, 1)); // [ 1, 5, 5 ]
// console.log([1, 2, 3].fill(5, 1, 2)); // [ 1, 5, 3 ]
// console.log([1, 2, 3].fill(5, 1, 1)); // [ 1, 2, 3 ]
// console.log([1, 2, 3].fill(5, 3, 3)); // [ 1, 2, 3 ]
// console.log([1, 2, 3].fill(5, -3, -2)); // [ 5, 2, 3 ]
// console.log([1, 2, 3].fill(5, -2, -3)); // [ 1, 2, 3 ]
// console.log([1, 2, 3].fill(5, NaN, NaN)); // [ 1, 2, 3 ]
// console.log([1, 2, 3].fill(5, 1, 5)); // [ 1, 5, 5 ]
// console.log(Array(5).fill(2)); // [ 2, 2, 2, 2, 2 ]
// console.log([].fill.call({ length: 3 }, 4)); // { '0': 4, '1': 4, '2': 4, length: 3 }
// console.log([].fill.call({ length: 5 }, 3)); // { '0': 3, '1': 3, '2': 3, '3': 3, '4': 3, length: 5 }
// 여기서 call 의 쓰임은?

// Objects by reference.
const arr1 = Array(3).fill({});
console.log(arr1); // [{}, {}, {}];
arr1[0].hi = "hi";
console.log(arr1); // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
arr1[1].hi = "hi2";
console.log(arr1); // [{ hi: "hi2" }, { hi: "hi2" }, { hi: "hi2" }]

const arr2 = Array(3).fill({}, 1, 3);
console.log(arr2); // [ <1 empty item>, {}, {} ]
arr2[1].hi = "hello";
console.log(arr2); // [ <1 empty item>, { hi: 'hello' }, { hi: 'hello' } ]
