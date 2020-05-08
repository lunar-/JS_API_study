// Array[@@species] 는 접근차 프로퍼티. array 생성자를 리턴.
// 뭐할 때 쓰나?

// Syntax
// Array[Symbol.species]

// Return value
// Array 생성자.

// species 를 이용하면 array 의 기본 생성자를 리턴받을 수 있다. 하위 클래스 생성자는 이를 오버라이드 해서 사용할 수 있다.
// 대충은 알겠는데 js 에서 이렇게까지 할 일이 얼마나 될까!! 물론 딥하게 하려면 필요할 수도 있지만!
// iterator 도 그렇고 Symbol 의 이해가 필요할 듯.

// Array[Symbol.species]; // function Array()

// Ex1
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
