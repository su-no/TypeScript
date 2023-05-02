// * Enums
// set of named constants 명명된 상수 집합
// enum으로 선언된 타입은 컴파일 시점에 IIFE(즉시실행함수)로 감싸져 객체로 변환된다.
// 따라서 enum으로 선언된 타입은 런타임에도 존재한다.
// Tree Shaking이 불가능하다.

enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

const status = OrderStatus.DELIVERED; // 2

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);
isDelivered(2);

// 기본값을 지정할 수 있다.
// 첫번째 요소에만 기본값을 지정하면, 다음 요소들은 1씩 증가한다.
enum alphabets {
  A = 10,
  B, // 11
  C, // 12
  D, // 13
}

// * Enums with string values
enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

// * Const Enum
// const enum으로 선언된 enum은 컴파일 시점에 값이 결정되어 런타임에서 제거된다.

// 하지만 Const Enum은 일반 상수로 선언되기 때문에, 실제 런타임에 실행되는 코드에서 에러를 유발할 수 있다.
// 이를 방지하기 위해 tsconfig 파일의 compilerOptions에 isolatedModules 설정을 true로 설정할 수 있는데, 이 경우에 const enum 또한 IIFE가 생성되어 Tree Shaking이 불가능하게 된다.

const enum ConstOrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

// * Union Types
// Union Types를 사용하면 타입을 정의하는 이점을 그대로 누리면서, JavaScript로 트랜스파일 해도 IIFE가 생성되지 않는다.
// 따라서 Tree Shaking이 가능해 번들 사이즈를 줄일 수 있다.
const OrderStatus2 = {
  PENDING: 0,
  SHIPPED: 1,
  DELIVERED: 2,
  RETURNED: 3,
} as const;

type OrderStatus2 = (typeof OrderStatus2)[keyof typeof OrderStatus2];
