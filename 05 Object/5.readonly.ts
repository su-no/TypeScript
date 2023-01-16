// * Readonly Properties
// properties that may not be changed after creation

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12,
  username: 'hyojin',
};

console.log(user.id);
user.id = 23; // readonly property에 값을 재할당 할 수 없다.

type Message = {
  readonly type: object;
  message: string;
};

// 단, 참조하는 객체의 속성은 변경할 수 있다.
const msg: Message = {
  type: { a: 1 },
  message: 'hello',
};
msg.type['a'] = 2;
