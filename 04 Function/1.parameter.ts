// Function Parameter Types
function square(num: number) {
  num.toUpperCase();
  return num * num;
}
square(3);
square('3');
square(true);

function greet(person: string) {
  return `Hi there, ${person}`;
}
greet('hyojin');
greet(true);

// 여러 개의 변수
const doSomthing = (person: string, age: number, isFunny: boolean) => {
  return `${person} ${age} ${isFunny}`;
};
doSomthing('hyojin', 30, true);
doSomthing(30, true, 'hyojin'); // 순서 바꿔도 오류 안나옴

// 기본값 설정하기
function greet2(person: string = 'stranger'): string {
  return `Hi there, ${person}`;
}

greet2(); // 인자를 전해주지 않아도 오류가 발생하지 않음
