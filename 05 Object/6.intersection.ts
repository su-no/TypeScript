// * Intersection Type 교차 타입

// 교차 타입

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCicle = Circle & Colorful;

const happyFace: ColorfulCicle = {
  radius: 10,
  color: 'yello',
};

// 교차 타입 확장, 추가

type Cat = {
  numLives: number;
};

type Dog = {
  name: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const doosigi: CatDog = {
  numLives: 7,
  name: 'doosigi',
  age: 0.3,
};
