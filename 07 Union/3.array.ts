// * Union Type & Array
// 배열이 여러 타입을 가질 수 있는 방법

const nums: number[] = [1, 2, 3, 4];

// Any Type
const stuff: any[] = [1, 2, 3, 4, true, 'add', {}];

// 두가지 타입을 가지는 배열
const something: (number | string)[] = ['as', 12];

// 두가지 Alias 타입을 가지는 배열
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

const coords: (Point | Loc)[] = [];

export {};
