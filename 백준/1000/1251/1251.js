// https://www.acmicpc.net/problem/1251 

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `mobitel`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


const inputArr = input().split('');

// console.log(inputArr)
const result = [];
for (let i = 1; i <= inputArr.length - 2; i++) {
    for (let j = i + 1; j <= inputArr.length - 1; j++) {
        // console.log(i, j)
        const left = inputArr.slice(0, i).reverse().join('');
        const middle = inputArr.slice(i, j).reverse().join('');
        const right = inputArr.slice(j).reverse().join('');
        result.push(left + middle + right);
    }
}
result.sort();
console.log(result[0])


