class Player {
  static description = 'Player In Our Game';
  #score = 0;
  #numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  // 특정 인스턴스와 관련 없으면서 클래스와 관련된 메소드를 만들고 싶을 때 사용
  // 주로 생성 메서드 만들 때 사용
  static randomPlayer() {
    return new Player('Random', 'Player');
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(' ');
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive');
    }
    this.#score = newScore;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log('BOOYAH!');
  }

  loseLif() {
    this.#numLives--;
  }
}

const player1 = new Player('Marta', 'Stewart');

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last); // 부모 클래스의 생성자를 호출
    this.powers = powers;
  }

  isAdmin = true;

  taunt() {
    console.log('YOU ARE GOING TO LOSE!');
  }
}

const adminPlayer1 = new AdminPlayer('admin', 'admin', [
  'delete',
  'add',
  'update',
]);

console.log(adminPlayer1);
