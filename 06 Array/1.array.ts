// * Array Type

// 단일 타입 애너테이션
const activeUsers: string[] = [];
activeUsers.push('suno');
activeUsers.push(1);

const ageList: number[] = [45, 5];
ageList[0] = 50;
ageList[0] = 'fifty';

// * Bracket Notation
// T<U> 형태로 작성할 수 있음.

const bools1: boolean[] = [];
const bools2: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
};

// * Alias
// 별칭도 사용 가능

const coords: Point[] = [];
coords.push({ x: 2, y: 3 });
