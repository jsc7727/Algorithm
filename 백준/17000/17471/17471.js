// https://www.acmicpc.net/problem/17471

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
5 2 3 4 1 2
2 2 4
4 1 3 6 5
2 4 2
2 1 3
1 2
1 2
    `
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const c = +input();
const dict = {}
input().split(' ').forEach((v, idx) => {
    dict[idx] = {
        population: +v,
        root: []
    }
})
for (let i = 0; i < c; i++) {
    dict[i].root.push(input().split(' ').slice(1).map(v => +v))
}

console.dir(dict.flat)