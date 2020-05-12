// copyWithin() 메소드는 array 의 일부분을 shallow copy 하여 해당 array 의 다른 부분에 위치시킨 뒤 그 array 를 리턴한다. size 의 수정은 없음.

const array1 = ["a", "b", "c", "d", "e"];

// copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// ["d", "d", "e", "d", "e"]

// Syntax
// arr.copyWithin(target[, start[, end]])

// Parameter
// target
// 복사할 시퀀스는 0을 기준으로 한 index. 값이 음수면 target 은 끝에서부터 카운트를 센다.
// target 이 arr.length 보다 크거나 같으면 아무것도 복사하지 않는다. target 이 start 보다 뒤에 위치하면 복사한 시퀀스는 arr.length 에 맞춰 짤림.

// start - Optional
// Zero based index at which to start copying elements from.If negative, start will be counted from the end.
// If start is omitted, copyWithin will copy from the start(defaults to 0).

// end - Optional
// Zero based index at which to end copying elements from.copyWithin copies up to but not including end.If negative, end will be counted from the end.
// If end is omitted, copyWithin will copy until the end(default to arr.length).

// Return value
// 변경된 array

// 카피 앤 패이스트는 한 번의 작업으로 이루어짐. 복사된 값은 복사 후 붙여넣기 값과 겹치더라도 복사한 기존 값을 가지고 있음.
// copyWithin 은 generic, 'this' 값이 꼭 array 일 필요는 없음.
// copyWithin 은 변경할 수 있는(?) 메소드. 'this' 의 length 를 변경하지 않는다. 그러나 그 안의 값이 변경되거나 새 프로퍼티가 생성될 수 있다.

// EX
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
const i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
