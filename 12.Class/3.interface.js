// implements는 클래스가 인터페이스의 타입을 가지고 있다는 것을 명시
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("This is a ".concat(this.color, " ").concat(this.brand, " jacket"));
    };
    return Jacket;
}());
var bike1 = new Bike('red');
var jacket1 = new Jacket('prada', 'black');
