var Player = /** @class */ (function () {
    // Paramter Property 단축 구문
    function Player(first, last) {
        this.first = first;
        this.last = last;
        // * Public/Private property
        // 기본적으로 public이라서 생략 가능
        this.age = 20;
        // private은 #와 같은 의미 (해당 메서드나 프로퍼티는 클래스 내부에서만 사용 가능)
        // private은 TypeScript이므로 컴파일 전에만 체크
        // #은 JavaScript이므로 런타임에서도 체크
        this._score = 0;
    }
    Player.prototype.secretMethod = function () {
        console.log('SECRET METHOD!');
    };
    Object.defineProperty(Player.prototype, "fullName", {
        // getter만 있고 setter가 없으면 readonly
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this.score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error('Score cannot be less than 0');
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var player1 = new Player('Marta', 'Stewart');
var player2 = new Player('Tiger', 'Woods');
