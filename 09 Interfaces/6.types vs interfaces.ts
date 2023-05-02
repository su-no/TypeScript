// * Types vs Interfaces
// * 1. 인터페이스는 객체 타입을 정의할 때만 사용한다.
// * 2. 인터페이스는 reopening이 가능하다.
// * 3. 인터페이스는 상속/다중상속이 가능하다.

// 모든 타입을 인터페이스로 대체할 수는 없다.
type Color = 'red' | 'blue';

// 인터페이스 reopening
interface Chicken {
  breed: string;
}

interface Chicken {
  numEggs: number;
}

// 인터페이스 상속
interface SpecialChicken extends Chicken {
  fly(): void;
}

export {};
