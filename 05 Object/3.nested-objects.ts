// * Nested Objects 중첩 객체

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

// 함수 인자의 구조분해할당이 가능하다.
function printSong({ title, artist }: Song): void {
  console.log(`${title} = ${artist}`);
}

const mySong = {
  title: 'B209',
  artist: 'Wangsimni Blues',
  numStreams: 19283345,
  credits: {
    producer: 'Wangsimni Blues',
    writer: 'Hyojin Sung',
  },
};

printSong(mySong);
calculatePayout(mySong);
