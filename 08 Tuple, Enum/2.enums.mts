// * Enums
// set of named constants 명명된 상수 집합

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
// enum 키워드로 선언된 enum은 런타임에도 존재한다. (즉시실행 함수로 감싸져 객체로 변환된다.)
// const enum으로 선언된 enum은 컴파일 시점에 값이 결정되어 런타임에서 제거된다.

const enum ConstOrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}
