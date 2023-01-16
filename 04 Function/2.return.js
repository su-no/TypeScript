"use strict";
// * Function Return Types
exports.__esModule = true;
// return 값이 number인 것을 추론할 수 있음
function square(num) {
    return num * num;
}
var doSomthing = function (person, age, isFunny) {
    return "".concat(person, " ").concat(age, " ").concat(isFunny);
};
// 기본값 설정하기
function greet2(person) {
    if (person === void 0) { person = 'stranger'; }
    return "Hi there, ".concat(person);
}
// * 두가지 타입을 반환하는 함수
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
