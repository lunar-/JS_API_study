// @@iterator 프로퍼티는 values() 프로퍼티와 같은 함수 오브젝트.

// Syntax
// arr[Symbol.iterator]();

// Return value
// 초기값은 values() 이터레이터 이기 때문에 기본적으로는 values() function 을 리턴할 것.

// Ex1
// Iteration using for ... of loop
const arr = ["w", "y", "k", "o", "p"];
const eArr = arr[Symbol.iterator]();
for (let item of eArr) {
  console.log(item);
}
// w
// y
// k
// o
// p

// Ex2
const arr2 = ["w", "y", "k", "o", "p"];
const eArr2 = arr2[Symbol.iterator]();
console.log(eArr2.next().value); // y
console.log(eArr2.next().value); // w
console.log(eArr2.next().value); // k
console.log(eArr2.next().value); // o
console.log(eArr2.next().value); // p
