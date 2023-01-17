// * Uniton Types
// 여러 타입을 가질 수  있음

let age: number | string = 21;
age = '23';

// * Union Alias Types

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 1, long: 2 };
