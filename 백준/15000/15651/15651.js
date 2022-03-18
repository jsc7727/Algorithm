const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 2
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => +v);
const arr = [];
const result = [];
const dfs = (v) => {
    if (arr.length === M) {
        result.push(arr.join(' '));
        return;
    }
    for (let i = v; i <= N; i++) {
        arr.push(i);
        dfs(i);
        arr.pop();
    }
}
dfs(1);
console.log(result.join('\n'))
