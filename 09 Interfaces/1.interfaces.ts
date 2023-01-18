// * Interfaces
// Interfaces are used to define the structure of an object.
// 인터페이스는 객체의 구조를 정의하는 데 사용된다.

interface Person {
  readonly name: string;
  age: number;
  isMarried?: boolean;
  // sayHello: () => void;
  sayHello(): void;
}

// alias와 거의 비슷한 기능을 한다.
type Person2 = {
  name: string;
  age: number;
  isMarried?: boolean;
  sayHello: () => void;
};

const thomas: Person = {
  name: 'Thomas',
  age: 30,
  sayHello() {
    console.log('Hello');
  },
};

// thomas.name = 'Thomas2';

export {};
