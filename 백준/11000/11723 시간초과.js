const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = input();
let arr = new Array(20).fill(false);
for (let i = 0; i < N; i++) {
    let [command, value] = input().split(' ');
    value = parseInt(value) - 1;
    if (command === 'add') arr[value] = true;
    if (command === 'remove') arr[value] = false;
    if (command === 'check') console.log(arr[value] ? 1 : 0);
    if (command === 'toggle') arr[value] = !arr[value];
    if (command === 'all') for (let k = 0; k < 20; k++)arr[k] = true;
    if (command === 'empty') for (let k = 0; k < 20; k++)arr[k] = false;
}
