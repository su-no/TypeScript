interface colorFul {
  color: string;
}

interface Printable {
  print(): void;
}

// implements는 클래스가 인터페이스의 타입을 가지고 있다는 것을 명시
class Bike implements colorFul {
  constructor(public color: string) {}
}

class Jacket implements colorFul, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`This is a ${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike('red');
const jacket1 = new Jacket('prada', 'black');

export {};
