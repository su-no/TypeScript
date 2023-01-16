// * Object

// 함수에서 객체를 받아서 annotation 처리

const dog = {
  name: 'doosigi',
  age: 0.3,
};

function printName(dog: { name: string; age: number }): string {
  return dog.name;
}

printName({ name: 'doosigi' });
printName(dog);

// 객체를 생성할 때 annotation 처리

let coordinate: { x: number; y: number } = { x: 0, y: 1 };

function randomCoordinate(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: Math.random(), y: Math.random() };
}

// * Excess Properties
// 객체 리터럴을 전달하면 사전에 정의된 프로퍼티만 사용할 수 있다.
printName({ name: 'doosigi', age: 0.3, breed: 'special' });

// 객체 참조를 전달하면 객체 안에 필수 프로퍼티가 있는지만 검사하고, 나머지는 무시된다.
const dog2 = {
  name: 'doosigi',
  age: 0.3,
  breed: 'special',
};
printName(dog2);
