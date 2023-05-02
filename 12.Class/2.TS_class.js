var Player = /** @class */ (function () {
    function Player(first, last) {
        // * Public/Private property
        // 기본적으로 public이라서 생략 가능
        this.score = 0;
        // private은 #와 같은 의미 (해당 메서드나 프로퍼티는 클래스 내부에서만 사용 가능)
        // private은 TypeScript이므로 컴파일 전에만 체크
        // #은 JavaScript이므로 런타임에서도 체크
        this.age = 20;
        this.first = first;
        this.last = last;
    }
    Player.prototype.secretMethod = function () {
        console.log('SECRET METHOD!');
    };
    return Player;
}());
var player1 = new Player('Marta', 'Stewart');
var player2 = new Player('Tiger', 'Woods');
