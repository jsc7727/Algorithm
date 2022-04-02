const fs = require('fs');
console.log(typeof fs.readFileSync('./input.txt').toString().split("\n"))
// const log = console.log;

// const stdin = (true
//     ? fs.readFileSync('/dev/stdin').toString()
//     : fs.readFileSync('./input.txt').toString()
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// const L = +input();
// const n = +input();

// const bids = [];
// for (let i = 0; i < n; i++) {
//     bids.push(input().split(' ').map(v => +v));
// }
// const expected = bids.map((el) => el[1] - el[0] + 1);
// const expectedWinner = expected.indexOf(Math.max(...expected));
// log(expectedWinner + 1);

// const cake = Array.from({ length: L + 1 }, () => 0);

// for (let i = 0; i < n; i++) {
//     let [p, k] = bids[i]
//     // console.log(p, k)
//     for (let j = p; j <= k; j++) {
//         if (cake[j] === 0) {
//             cake[j] = i + 1;
//         }
//     }
// }
// // console.log(cake)
// let actual = {};
// for (piece of cake) {
//     actual[piece] = actual[piece] == undefined ? 1 : (actual[piece] += 1);
// }

// delete actual[0];
// // console.log(actual)
// const keys = Object.keys(actual);
// let mode = keys[0];
// keys.forEach((val) => {
//     if (actual[val] > actual[mode]) {
//         mode = val;
//     }
// });

// log(mode);