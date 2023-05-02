// * Extending Interfaces
// 인터페이스 상속

interface Dog {
  name: string;
  age: number;
  breed: string;
  bark(): string;
}

const doosigi: Dog = {
  name: 'doosigi',
  age: 0.4,
  breed: 'mix',
  bark: () => 'woof woof',
};

// 인터페이스 상속

interface ServiceDog extends Dog {
  job: 'drug sniffing' | 'bomb sniffing' | 'search and rescue';
}

const doodoo: ServiceDog = {
  name: 'doodoo',
  age: 0.4,
  breed: 'mix',
  bark: () => 'woof woof',
  job: 'drug sniffing',
};

export {};
