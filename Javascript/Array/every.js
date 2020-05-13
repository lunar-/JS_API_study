// every() 메소드는 모든 요소가 테스트 함수를 통과하는지 테스트하는 메소드.
// 이 메소드는 빈 배열에 어떤 condition(이건 뭐라고 해석해야하지) 을 넣든 true 를 반환한다.

const isBelowThreshold1 = (currentValue) => currentValue < 40;
const isBelowThreshold2 = (currentValue) => currentValue < 20;
const array1 = [1, 30, 28, 10, 13, 27];
// console.log(array1.every(isBelowThreshold1));
// console.log(array1.every(isBelowThreshold2));
// true
// false

// Syntax
// arr.every(callback(element[, index[, array]])[, thisArg])

// Parameters
// callback
// 각 요소들을 테스트할 함수

// element
// array 안에서 현재 처리중인 요소

// index - Optional
// 현재 처리중인 요소의 인덱스

// array - Optional
// The array every was called upon. 무슨 뜻이지. every 로 호출된 array?

// thisArg - Optional
// Value to use as this when executing callback. 영어 해석이 안됨.. 콜백 동작중에 뭐시기?

// Return value
// array 의 모든 요소가 테스트 함수에서 true 를 얻으면 true, 아니면 false 를 반환

// every() 는 콜백 함수를 각각 요소별로 한번씩 실행시킨다. 하나의 false 값이 나올 때 까지. 한개라도 false 값을 찾으면 그 즉시 false 값을 반환한다.
// 모든 요소들을 다 검사하고 난 뒤 전부 true 값이어야 true 값이 반환됨. -> 각각 함수 동작의 횟수의 차이가 있다.
// 콜백은 array 안에서 값을 가진 index 에만 동작하고, 값이 지워졌거나 할당되지 않은 인덱스는 동작하지 않는다.

// 내일 이어서 하겠습니다. too many english words. I hate english
