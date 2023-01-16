// * Any
let thing: any = 'hello';
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie: string;

// * Delayed Initialization & Implicit Any
// 초기화 후 값을 나중에 할당하는 경우, 타입을 추론할 수 없다.
// 이 경우 타입을 명시해주어야 한다.

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = movie;
  }
}

foundMovie();
foundMovie = 1;
