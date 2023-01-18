// Union Type
const stuff: (string | number)[] = [1, 'a', 2, 'b', 3, 'c', 4];

// * Tuples
// 고정된 타입의 배열을 표현할 때 사용한다.
// 타입의 순서가 보장된다.
// JavaScript에는 없는 타입

// 3개의 number 요소를 가진 배열
const color: [number, number, number] = [255, 255, 255];

// number, string 요소를 가진 타입
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
// goodRes[0] = '200'; // ! 오류 발생

// ! 튜플의 한계
// 튜플이 생성된 이후에 배열의 요소를 추가하거나 삭제해도 오류가 발생하지 않는다.
// 왜냐하면 튜플은 실제로 JavaScript에 존재하지 않고, TypeScript 백그라운드에서 실행되는 타입이기 때문이다.
goodRes.push(0);
goodRes.pop();

const responses: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
  [500, 'Internal Server Error'],
];
