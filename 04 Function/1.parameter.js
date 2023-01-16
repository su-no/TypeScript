// Function Parameter Types
function square(num) {
    num.toUpperCase();
    return num * num;
}
square(3);
square('3');
square(true);
function greet(person) {
    return "Hi there, ".concat(person);
}
greet('hyojin');
greet(true);
// 여러 개의 변수
var doSomthing = function (person, age, isFunny) {
    return "".concat(person, " ").concat(age, " ").concat(isFunny);
};
doSomthing('hyojin', 30, true);
doSomthing(30, true, 'hyojin'); // 순서 바꿔도 오류 안나옴
// 기본값 설정하기
function greet2(person) {
    if (person === void 0) { person = 'stranger'; }
    return "Hi there, ".concat(person);
}
