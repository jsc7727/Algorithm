const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
0 0 0
0 0 0
0 0 0
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = input();
let arr = new Array(20).fill(false);
for (let i = 0; i < N; i++) {
    
}
