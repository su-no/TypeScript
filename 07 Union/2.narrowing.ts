// * Union Type with Functions
// 타입 좁히기 Narrowing

function printAge(age: number | string): void {
  console.log(`Your are ${age} years old`);
}

printAge(23);
printAge('23');

// * Type Narrowing
// Union Type을 사용할 경우, 타입을 좁히는 작업이 필요함
function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
}
