// forEach() 는 주어진 함수를 배열의 각 요소마다 한번씩 실행한다.

const array1 = ["a", "b", "c"];
// array1.forEach((e) => console.log(e));
// a
// b
// c

// Syntax
// arr1.forEach(callback(currentValue[, index[, array]])[, thisArg])

// Parameters
// callback
// 각 요소에 실행할 함수. 다음 세 인자를 받음

// currentValue
// 배열 내 현재 처리중인 요소

// index - optional
// 배열 내 현재 처리중인 요소의 인덱스

// array - optional
// forEach() 를 호출한 배열

// thisArg - optional
// 콜백 을 실행할 때 this 로 사용할 값

// Return value
// undefined

// forEach() 는 주어진 콜백을 배열에 있는 각 요소에 대해 오름차순으로 한번씩 실행.
// 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않음.

// thisArg 파라미터를 forEach() 에 제공한 경우 콜백의 this 값으로 쓰인다. 전달하지 않으면 undefined 를 사용.
// 최종 this 값은 함수의 this 를 결정하는 평소 규칙을 따른다.

// forEach() 로 처리할 요소의 범위는 최초 콜백이 호출되기 전에 설정.
// forEach() 가 호출된 이후에 배열에 추가한 요소는 콜백이 방문하지 않는다.
// 기존에 존재하던 요소 값이 바뀐 경우 콜백에 전달하는 값은 forEach() 가 요소를 방문한 시점의 값을 사용.
// 방문하기 전 삭제된 요소에는 방문하지 않는다.
// 만약 이미 방문했던 요소가 iteration 도중 삭제된 경우(ex. shift() 등을 이용) 다음 요소는 스킵될 것.

// forEach() 는 각 배열 요소에 한 번씩 콜백 함수를 실행.
// map() 과 reduce() 와 달리 undefined 를 반환하기 때문에 메서드 체인 중간에 사용할 수 없다.
// 대표적인 사용처는 메서드 체인 끝에서 사이드 이펙트를 실행시키는 것.

// forEach() 는 배열을 변환시키지 않는다. 그러나! 콜백이 변형시킬 수도 있음.

// !!!
// 예외를 던지지 않고는 forEach() 를 중간에 멈출 수 없다.
// 만약 중간에 멈추고자 한다면 forEach() 가 적절한 방법이 아닐 수 있음.

// 조기에 반복을 종료할 수 있는 방법 :
// 간단한 for 문
// for...of, for...in 문
// Array.prototype.every()
// Array.some() <- 다 프로토타입 아래
// Array.find()
// Array.findIndex()

// 다른 배열 메서드 - every(), some(), find(), findIndex() 는 배열 요소를 판별 함수에 전달하고 그 결과의 참/거짓 여부에 따라 반복의 종료 여부를 결정

// EX1
// for 문을 forEach() 로

const items = ["item1", "item2", "item3"];
const copyArray = [];

// for 문
for (let i = 0; i < items.length; i++) {
  copyArray.push(items[i]);
}

// forEach() 이용
items.forEach((e) => copyArray.push(e));

// EX2
// 초기화하지 않은 값의 반복 생략
let callbackRun = 0;
[2, 5, , 9].forEach((num, index) => {
  console.log("array[" + index + "] = " + num);
  callbackRun++;
});
console.log("callbackRun : ", callbackRun);
// array[0] = 2
// array[1] = 5
// array[3] = 9
// callbackRun: 3
// 인덱스 2 값은 요소가 존재하지 않아 콜백이 스킵됨

// EX3
// using thisArg
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
console.log(obj.sum);
// 3
// 16

// thisArg 매개변수(this) 를 forEach() 에 제공했기 때문에 콜백은 전달받은 this 값을 자신의 this 값으로 사용할 수 있음.
// 화살표 함수 표현식을 사용하여 함수 인수를 전달하는 경우 thisArg 매개변수는 화살표 함수가 this 값을 lexical(정적) 바인딩하기 때문에 생략될 수 있음.

// EX4
// 객체 복사 함수 - 다음은 주어진 객체의 사본을 만듬
// forEach() 를 이용해 copy 기능을 만들어 본 예제
function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);

  propNames.forEach(function (name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

const obj1 = { a: 1, b: 2, C: 3 };
const obj2 = copy(obj1);
// console.log(obj2);
// { a: 1, b: 2, C: 3 }

// EX5
// 반복 중 배열이 변경으로 인한 반복 생략
// shift() 를 이용해 배열의 첫 번째 항목을 제거하면 모든 항목이 한 위치 앞으로 이동하고, 다음 인덱스는 이동해서 한칸 앞으로 온 four 를 가르키게 됨.
// forEach() 는 반복 전에 배열의 복사본을 만들지 않음.
let words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one
// two
// four
