// https://www.acmicpc.net/problem/1018

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
    J-123 I-808 B-203 A-102 A-4
    C-19 G-999 G-555 G-902 I-111
    `
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = +input();

const waiting = [];
const inputArray = [];

for (let i = 0; i < N; i++) {
    inputArray.push(...input().trim().split(' ').map(v => {
        const temp = v.split('-')
        return [temp[0], +temp[1]]
    }));
}

inputArray.reverse();

const sortedInputArray = [...inputArray].sort((a, b) => {
    if (a[0] === b[0]) {
        return b[1] - a[1];
    }
    return b[0] > a[0] ? 1 : -1;
});

const compare = (a, b) => {
    return a.join('-') === b.join('-');
}
waiting.push(inputArray.pop());
while (sortedInputArray.length > 0) {

    const lastSortedInputArray = sortedInputArray[sortedInputArray.length - 1];
    const lastWaiting = waiting[waiting.length - 1];
    if (waiting.length > 0 && compare(lastWaiting, lastSortedInputArray)) {
        waiting.pop();
        sortedInputArray.pop();
        continue;
    }
    else if (inputArray.length > 0 && compare(lastSortedInputArray, inputArray[inputArray.length - 1])) {
        inputArray.pop();
        sortedInputArray.pop();
        continue;
    }
    if (inputArray.length > 0) {
        waiting.push(inputArray.pop());
        continue;
    }
    break;
}
if (inputArray.length > 0 || waiting.length > 0) console.log('BAD');
else console.log('GOOD');