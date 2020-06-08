// Array.isArray() 메서드는 인자가 Array 인지 판별한다.

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray({ foo: 123 }));
// console.log(Array.isArray("foobar"));
// console.log(Array.isArray(undefined));
// true
// false
// false
// false

// Syntax
// Array.isArray(obj)

// Parameters
// obj
// 검사할 객체

// Return value
// 객체가 Array 면 true, 아니면 false

// TypedArray(참조 : https://devdocs.io/javascript/global_objects/typedarray) 객체면 항상 false

// http://web.mit.edu/jwalden/www/isArray.html
// 객체가 배열인지 정확히 판별하는 방법. 영어라 읽기 싫다...

// EX1
// 모두 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
Array.isArray(Array.prototype); // Array.prototype 은 스스로도 배열

// EX2
// 모두 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });

// EX3
// Array 객체를 판별할 때 Array.isArray 는 iframe을 통해서도 작동하기 때문에 instanceof 보다 적합
let iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 올바른 Array 판별
Array.isArray(arr); // true
// iframe 을 통해서 작동하지 않기 때문에 올바르지 않은 방법
arr instanceof Array; // false
