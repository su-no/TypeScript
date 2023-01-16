// * Type Alias 타입 별칭
// 객체, 배열, 함수 등의 타입을 별칭으로 지정할 수 있다.

// Type Alias 만들기
type Point = {
  x: number;
  y: number;
};

// function randomCoordinate(coord: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: Math.random(), y: Math.random() };
// }

function randomCoordinate(coord: Point): Point {
  return { x: Math.random(), y: Math.random() };
}

// function doublePoint(point: { x: number; y: number }): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

export {};
