const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
100 4
0 4
2 2
1 -1
1 2
3 3
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const c = input();
const inputArray = []
for (let i = 0; i < c; i++) {
    inputArray.push(input().split(' ').map(v => parseInt(v)));
}
let result = "";
inputArray.sort((a, b) => {
    if ((a[1] - b[1]) > 0) return 1
    if ((a[1] - b[1]) < 0) return -1
    if ((a[0] - b[0]) > 0) return 1
    if ((a[0] - b[0]) < 0) return -1
}).forEach(v => result += `${v[0]} ${v[1]}\n`)
console.log(result)

// console.log(inputArray.sort((a, b) => {
//     if (a[1] !== b[1]) return a[1] - b[1];
//     return a[0] - b[0]
// }))