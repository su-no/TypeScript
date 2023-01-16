// * Never Type

// 이 함수는 절대로 실행되면 안 된다는 것을 명시
function makeError(message: string): never {
  throw new Error(message);
}

// 이 함수는 절대로 끝나면 (return 하면) 안 된다는 것을 명시
function gameLoop(): never {
  while (true) {
    console.log('game loop runnig');
  }
}
