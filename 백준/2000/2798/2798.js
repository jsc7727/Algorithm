// https://www.acmicpc.net/problem/2798
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 21
    5 6 7 8 9`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let answer = 0;
const [N, M] = input().split(' ').map(v => +v);
let arr = input().split(' ').map(v => +v);
// console.log(N, M, arr)
const dfs = (lst = []) => {
    if (lst.length === 3) {
        const sum = lst.reduce((a, b) => a + arr[b], 0)
        if (answer < sum && sum <= M) {
            answer = sum;
        }
        return;
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (!lst.includes(i)) {
                lst.push(i)
                dfs(lst)
                lst.pop();
            }
        }
    }
}
dfs()
console.log(answer);