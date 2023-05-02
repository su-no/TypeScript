var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        // protected는 자식 클래스에서 접근 가능
        this._type = 'Player';
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
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.changeType = function () {
        // this._score = 11; // private이므로 접근 불가
        this._type = 'SuperPlayer'; // protected이므로 접근 가능
    };
    return SuperPlayer;
}(Player));
var player1 = new Player('Marta', 'Stewart');
var player2 = new Player('Tiger', 'Woods');
var superPlayer = new SuperPlayer('Marta', 'Stewart');
