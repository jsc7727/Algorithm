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

const recursive = (arr, count = M) => {
    // console.log("start", arr, count)
    const temp = [];
    if (count === 1) {
        return arr.map(v => [v]);
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            const temp2 = [...arr.slice(0, i), ...arr.slice(i + 1)];
            // console.log("return ", temp2);
            const temp3 = recursive(temp2, count - 1).map(v => [arr[i], ...v]);
            temp.push(...temp3)
        }
        return temp;
    }
}
const arr = Array.from({ length: N }, (_, idx) => idx + 1);
const result = recursive(arr);
for (let i of result) {
    console.log(...i);
}