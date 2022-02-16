const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `48
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const K = parseInt(input());
const N = K * 2 - 1;
const arr = new Array(K).fill(null).map(_ => new Array(N).fill(' '));

const dfs = (x, y, len) => {
    if (len === 3) {
        arr[x][y] = '*';
        arr[x + 1][y - 1] = '*';
        arr[x + 1][y + 1] = '*';
        for (let i = 0; i < 5; i++) {
            arr[x + 2][y - 2 + i] = '*'
        }
        return;
    }
    const lenDiv2 = len / 2;
    dfs(x, y, lenDiv2)
    dfs(x + lenDiv2, y + lenDiv2, lenDiv2)
    dfs(x + lenDiv2, y - lenDiv2, lenDiv2)
}
dfs(0, K - 1, K);

for (let i = 0; i < K; i++) {
    console.log(arr[i].join(''));
}
