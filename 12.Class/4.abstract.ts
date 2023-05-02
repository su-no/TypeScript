// * Abstract Class 추상 클래스
// 추상 클래스는 인스턴스를 만들 수 없고, 상속을 위해 존재한다.
// abstract 키워드가 붙은 메서드는 하위 클래스에서 구현해야 한다.

// * Interface vs Abstract Class
// Abstract Class는 확장될 때 기본으로 사용할 수 있는 기능을 제공한다.

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log('Hello!');
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const fullTime = new FullTimeEmployee('Marta', 'Stewart', 100000);
const partTime = new PartTimeEmployee('Tiger', 'Woods', 100, 80);

console.log(fullTime);
console.log(fullTime.getPay());
console.log(partTime);
console.log(partTime.getPay());
