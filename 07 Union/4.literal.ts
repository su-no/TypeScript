// * Literal Types

// 숫자 0을 타입으로 가지는 변수
let zero: 0 = 0;
zero = 2;

// 문자열 'hi'를 타입으로 가지는 변수
let hi: 'hi';
hi = 'hello';

// 특정한 문자열을 타입으로 가지는 변수
let mood: 'happy' | 'sad' | 'angry' = 'happy';
mood = 'sad';

// 요일을 타입으로 가지는 변수
type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

let today: DayOfWeek = 'Tue';
today = 'Monday';
