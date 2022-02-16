const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
9
2 1 4 3 5 6 2 7 2
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = input();
const c = input();
const inputArray = input().split(' ').map(v => parseInt(v));
const photoFrame = [];
const likeList = new Array(101).fill(0);

for (let i of inputArray) {
    // console.log(photoFrame, i)
    // console.log(...photoFrame.map(v => likeList[v]))
    if (photoFrame.includes(i)) {
        likeList[i]++;
    }
    else if (photoFrame.length === parseInt(N)) {
        let idx = 0;
        let likeCount = likeList[photoFrame[0]];
        for (let k = 1; k < N; k++) {
            if (likeCount > likeList[photoFrame[k]]) {
                likeCount = likeList[photoFrame[k]];
                idx = k;
            }
        }
        const temp = photoFrame.splice(idx, 1);
        likeList[temp[0]] = 0;
        photoFrame.push(i);
    }
    else {
        photoFrame.push(i)
    }
}

// console.log(inputArray);
console.log(...photoFrame.sort((a, b) => a - b));