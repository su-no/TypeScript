class Player {
  // * Public/Private property
  // 기본적으로 public이라서 생략 가능
  public age: number = 20;
  // private은 #와 같은 의미 (해당 메서드나 프로퍼티는 클래스 내부에서만 사용 가능)
  // private은 TypeScript이므로 컴파일 전에만 체크
  // #은 JavaScript이므로 런타임에서도 체크
  private _score: number = 0;

  // Paramter Property 단축 구문
  constructor(public first: string, public last: string) {}

  private secretMethod(): void {
    console.log('SECRET METHOD!');
  }

  // getter만 있고 setter가 없으면 readonly
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this.score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error('Score cannot be less than 0');
    }
    this._score = newScore;
  }
}

const player1 = new Player('Marta', 'Stewart');
const player2 = new Player('Tiger', 'Woods');
