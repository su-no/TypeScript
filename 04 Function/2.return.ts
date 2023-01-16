// * Function Return Types

// return 값이 number인 것을 추론할 수 있음
function square(num: number): number {
  return num * num;
}

const doSomthing = (person: string, age: number, isFunny: boolean): string => {
  return `${person} ${age} ${isFunny}`;
};

// 기본값 설정하기
function greet2(person: string = 'stranger'): string {
  return `Hi there, ${person}`;
}

// * 두가지 타입을 반환하는 함수
function random(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

export {};
