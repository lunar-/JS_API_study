// experimental now
// flat() 메소드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새 배열을 생성

// Syntax
// const newArr = arr.flat([depth])

// Parameters
// depth - optional
// 중첩 배열 구조를 평탄하게 만들 때 사용할 깊이 값. 기본값은 1

// Return value
// 하위 배열을 이어붙인 새 배열

// EX1
const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]
// console.log(arr2.flat(2));
// [1, 2, 3, 4, 5, 6]

// EX2
// flat() 메소드는 배열의 빈칸도 제거
const arr3 = [1, 2, , [4, 5]];
// console.log(arr3.flat());
// [1, 2, 4, 5]

// 대안
// reduce 와 concat
const array1 = [1, 2, [3, 4]];
const flatArray1 = array1.flat();
const flatArray2 = array1.reduce((acc, val) => acc.concat(val), []);
// console.log(flatArray1);
// console.log(flatArray2);
// [1, 2, 3, 4]
// [1, 2, 3, 4]
const flatten = (arr) => [].concat(...arr);
// console.log(flatten(array1));
// [1, 2, 3, 4]

// reduce + concat + isArray + 재귀
const array2 = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}
// function flattenDeep(arr1) {
//   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }
// console.log(flatDeep(array2, Infinity));
// [1, 2, 3, 4, 5, 6]

// stack
function flattenByStack(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

const array3 = [1, 2, [3, 4, [5, 6]]];
// console.log("result : ", flattenByStack(array3));
// result: [1, 2, 3, 4, 5, 6]

// Generator 함수
function* flattenByGenerator(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flattenByGenerator(item, depth - 1);
    } else {
      yield item;
    }
  }
}
const flattenArray = [...flattenByGenerator(array3, Infinity)];
// console.log(flattenArray);
// [1, 2, 3, 4, 5, 6]
