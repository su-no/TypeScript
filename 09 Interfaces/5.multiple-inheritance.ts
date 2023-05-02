// * Interfaces Multiple Inheritance
// 인터페이스 다중 상속

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const ariana: Engineer = {
  name: 'ariana',
  id: 1,
  email: 'ariana@gmail.com',
  level: 'senior',
  languages: ['javascript', 'typescript'],
};

export {};
