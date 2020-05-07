//array 는 global object. list-like objects.

// create an Array
const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// 2

// access an array item
const first = fruits[0];
// Apple
const last = fruits[fruits.length - 1];
// Banana

// Loop over an array
fruits.forEach((item, index, array) => {
  // console.log(item, index);
});
// Apple 0
// Banana 1

// Add elements to the end of an array
const newLength = fruits.push("Orange"); // push() 는 array 마지막에 element 를 하나나 그 이상을 추가하고, 새 array 의 length 를 리턴
// console.log(newLength);
// 3
// console.log(fruits);
// ["Apple", "Banana", "Orange"]

// const 를 사용함에도 array 에 새 element 가 추가될 수 있는 것은 해당 array 의 레퍼런스 주소 값이 변하지 않기 때문일 것.
// 불변성을 장담할 수 없음. 아마도
// react state 같이 불변(?)해야 하는 객체는 이렇게 직접 배열을 수정하면 안됐던 것 같은데.

// Remove an element from the end of an array
const last2 = fruits.pop(); // 제일 마지막 element 를 잘라내어 그 값을 리턴하는 듯
// console.log(last2);
// Orange
// console.log(fruits);
// ["Apple", "Banana"]

// Remove an element from the front of an array
const first2 = fruits.shift(); // pop() 과 동작이 같으나 제일 첫번째 값을 리턴.
// console.log(first2);
// Apple
// console.log(fruits);
// ["Banana"]

// Add to the front of an array
const newLength2 = fruits.unshift("Strawberry"); // push() 와 동작이 같고 단지 array 앞에 element 를 추가
// console.log(newLength2);
// 2
// console.log(fruits);
// ["Strawberry", "Banana"]

// Find the index of an item in an array
fruits.push("Mango");
const index1 = fruits.indexOf("Banana");
const index2 = fruits.indexOf("Melon");
// console.log(index1);
// 1
// console.log(index2);
// -1
