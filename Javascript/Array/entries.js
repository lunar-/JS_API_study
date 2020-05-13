// entries() 메소드는 새로운 어레이 이터레이터를 반환한다. 얘는 array 의 인덱스와 각각의 값을 key/value 로 가지고 있음.

const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// [0, "a"]
// console.log(iterator1.next().value);
// [1, "b"]

// Syntax
// array.entries()

// Return value
// new array iterator object

// EX1
for (let e of iterator1) {
  // console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
