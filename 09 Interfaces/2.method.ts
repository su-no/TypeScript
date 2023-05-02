// * Interface

interface Person {
  name: string;
  age: number;
  isMarried?: boolean;
  // 메서드가 받는 인자와 리턴 값의 타입을 정의할 수 있음.
  // sayHello: (name: string) => void;
  sayHello(name: string): void;
}

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4)); // 60

export {};
