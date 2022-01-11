let imgCoords: RSP[keyof RSP] = '0';
interface RSP {
  readonly ROCK: '0';
  readonly SCISSORS: '-142px';
  readonly PAPER: '-284px';
}

const rsp: RSP = { // 딕셔너리 자료구조
  ROCK: '0',
  SCISSORS: '-142px',
  PAPER: '-284px'
}; // as const도 설명

const score = {
  SCISSORS: 1,
  ROCK: 0,
  PAPER: -1,
} as const;

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
  return (Object.keys(rsp) as ['ROCK', 'SCISSORS', 'PAPER']).find((k) => {
    return rsp[k] === imgCoords;
  })!;
}

document.querySelectorAll('.btn').forEach((btn) => {
	btn.addEventListener('click', function(this: HTMLButtonElement, e: Event) {
		const myChoice = this.textContent as keyof RSP;
		const myScore = score[myChoice];
		const computerScore = score[computerChoice(imgCoords)];
		const diff = myScore - computerScore;
		if (diff === 0) {
			console.log('Draw');
		} else if ([-1, 2].indexOf(diff)) {
			console.log('Win!');
		} else {
			console.log('Lose');
		}
	});
});

// let interval: number;
// function intervalMaker() {
//   interval = setInterval(function () {
//     if (imgCoords === rsp.ROCK) {
//       imgCoords = rsp.SCISSORS;
//     } else if (imgCoords === rsp.SCISSORS) {
//       imgCoords = rsp.PAPER;
//     } else {
//       imgCoords = rsp.ROCK;
//     }
//     if (document.querySelector('#computer')) {
//       (document.querySelector('#computer') as HTMLElement).style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imgCoords + ' 0';
//     }
//   }, 100);
// }

// intervalMaker();

