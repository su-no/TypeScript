// * Types vs Interfaces

// Type Alias는 중복 선언이 불가능하다.

type Person = {
  name: string;
};

type Person = {
  age: number;
};

// Interface는 중복 선언이 가능하다.

interface Person2 {
  name: string;
}

interface Person2 {
  age: number;
}

const person: Person2 = {
  name: 'Thomas',
  age: 30,
};
