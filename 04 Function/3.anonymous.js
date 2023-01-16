// * Anonymous Function Contextual Typing
// 메소드 내에서 타입을 명시하지 않아도 타입 추론이 가능하다.
var colors = ['red', 'green', 'blue'];
colors.map(function (color) {
    // color: string
    return color.toUpperCase();
});
