const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `12
0
1
2
3
4
5
6
7
8
9
10
11
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const c = input();
const func = (n) => {
    let N = n;
    if (N < 3) N = 3;
    const dpArr = new Array(N).fill(0);
    dpArr[0] = 1;
    dpArr[1] = 2;
    dpArr[2] = 4;
    for (let i = 3; i < N; i++) {
        dpArr[i] = dpArr.slice(i - 3, i).reduce((a, b) => a + b);
    }
    return dpArr[n - 1];
}
for (let i = 0; i < c; i++) {
    console.log(func(input()))
}

// =1 / 1개
// 1

// =2 / 2개
// 1+1
// 2

// =3 / 4개
// 1+1+1
// 1+2
// 2+1
// 3

// =4 / 7개
// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// 1+3
// 3+1

// 1/1
// 2/2
// 3/4
// 4/7
// 5/(13)
// 6/(24)
// 7/44