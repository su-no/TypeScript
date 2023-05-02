class Player {
  // * Read-only property
  readonly first: string;
  readonly last: string;

  // * Public/Private property
  // 기본적으로 public이라서 생략 가능
  public score: number = 0;
  // private은 #와 같은 의미 (해당 메서드나 프로퍼티는 클래스 내부에서만 사용 가능)
  // private은 TypeScript이므로 컴파일 전에만 체크
  // #은 JavaScript이므로 런타임에서도 체크
  private age: number = 20;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log('SECRET METHOD!');
  }
}

const player1 = new Player('Marta', 'Stewart');
const player2 = new Player('Tiger', 'Woods');
