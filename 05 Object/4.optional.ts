// * Optional Properties
// properties that may or may not be present in an object

type Point = {
  x: number;
  y: number;
  z?: number; // optional property
};

const myPoint: Point = { x: 1, y: 2 };
const myPoint2: Point = { x: 1, y: 2, z: 3 };
