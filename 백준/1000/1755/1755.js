// https://www.acmicpc.net/problem/1755
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8 28
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
const dict = {
    '0': "zero",
    '1': "one",
    '2': "two",
    '3': "three",
    '4': "four",
    '5': "five",
    '6': "six",
    '7': "seven",
    '8': "eight",
    '9': "nine",
    "zero": '0',
    "one": '1',
    "two": '2',
    "three": '3',
    "four": '4',
    "five": '5',
    "six": '6',
    "seven": '7',
    "eight": '8',
    "nine": '9',
}

const [n, m] = input().trim().split(' ').map(v => +v);

let arr = Array.from({ length: m - n + 1 }, (_, idx) => n + idx).map(v => {
    return String(v).split('').map(c => dict[c]).join(' ');
})
arr.sort()
arr = arr.map((s, idx) => {
    let res = s.split(' ').map(c => dict[c]).join('');
    if (idx !== 0 && idx % 10 === 0) {
        res = "\n" + res;
    }
    return res;
});
console.log(...arr)

