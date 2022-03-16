const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 4
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => +v);
const arr = [];
const visited = new Array(N + 1).fill(false);
const result = [];
const dfs = (v) => {
    if (arr.length === M) {
        result.push(arr.join(' '));
        return;
    }
    for (let i = v; i <= N + 1; i++) {
        if (visited[i] === false) {
            arr.push(i);
            dfs(i + 1);
            arr.pop();
        }
    }
}
dfs(1);
console.log(result.join('\n'))
