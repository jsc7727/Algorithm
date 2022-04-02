


const robotPath2 = function (room, src, sDir, dst, dDir) {
    const xLen = room[0].length;
    const yLen = room.length;

    const checkList = new Array(yLen).fill(null).map(_ => new Array(xLen).fill(Number.MAX_SAFE_INTEGER));
    const isValid = (y, x) => 0 <= y && y < yLen && 0 <= x && x < xLen;

    const rotate = (dir1, dir2) => {
        const result = Math.min(Math.abs(dir1 - dir2), 4 - Math.abs(dir1 - dir2));
        return result;
    }
    const queue = Array(xLen * yLen);
    let front = 0;
    let rear = 0;
    const isEmpty = (queue) => front === rear;
    const enQueue = (queue, pos) => {
        queue[rear] = pos;
        rear++;
    };
    const deQueue = (queue) => {
        return queue[front++];
    };
    enQueue(queue, [0, src, sDir]);
    dq = [[0, src, sDir]];
    while (isEmpty(queue) === false) {
        const [idx, [y1, x1], dq_sDir] = deQueue(queue);
        if (y1 === dst[0] && x1 === dst[1]) {
            const r = rotate(dq_sDir, dDir);
            if (checkList[y1][x1] > (idx + r)) {
                checkList[y1][x1] = (idx + r);
            }
            continue;
        }
        checkList[y1][x1] = idx;
        for (const [y2, x2, arrow] of [[-1, 0, 1], [0, 1, 2], [1, 0, 3], [0, -1, 4]]) {
            const [y3, x3] = [y2 + y1, x2 + x1];
            if (isValid(y3, x3) && room[y3][x3] === 0) {
                let candidate = idx + rotate(dq_sDir, arrow) + (arrow == dq_sDir ? 0 : 1);
                if (checkList[y3][x3] > candidate) {
                    if (y3 === dst[0] && x3 === dst[1]) {
                        const r = rotate(arrow, dDir);
                        if (checkList[y3][x3] > (candidate + r)) {
                            checkList[y3][x3] = (candidate + r);
                        }
                        continue;
                    }
                    else {
                        enQueue(queue, [candidate, [y3, x3], arrow]);
                    }
                }
            }
        }
    }
    for (let i of checkList) {
        console.log(i.join(' '))
        // console.log(i)
    }
    console.log("checkCount", checkCount)
    return checkList[dst[0]][dst[1]];
};

// let room = [
//     [0, 0, 0, 0],
//     [0, 1, 1, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 1],
// ];
// let src = [3, 0];
// let sDir = 3;
// let dst = [2, 2];
// let dDir = 2;
// let output = robotPath2(room, src, sDir, dst, dDir);
// console.log(output); // --> 11

const room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
];
const src = [4, 2];
const sDir = 1;
const dst = [2, 2];
const dDir = 3;
output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 9


// const room = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 1, 1, 1, 0, 1],
//     [0, 0, 1, 0, 0, 0, 1],
//     [0, 0, 1, 0, 1, 1, 1],
//     [0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
// ];
// const src = [0, 4];
// const sDir = 1;
// const dst = [7, 2];
// const dDir = 2;
// output = robotPath2(room, src, sDir, dst, dDir);
// console.log(output); // --> 9


// const test = () => {
//     const robotPath2 = function (room, src, sDir, dst, dDir) {
//         const R = room.length;
//         const C = room[0].length;
//         const MOVES = [
//             [1, -1, 0], // UP
//             [2, 0, 1], // RIGHT
//             [3, 1, 0], // DOWN
//             [4, 0, -1], // LEFT
//         ];
//         const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
//         const directions = [];
//         const dist = [];
//         for (let row = 0; row < R; row++) {
//             directions.push(Array(C).fill(0));
//             dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
//         }
//         const queue = Array(R * C);
//         let front = 0;
//         let rear = 0;
//         const isEmpty = (queue) => front === rear;
//         const enQueue = (queue, pos) => {
//             queue[rear] = pos;
//             rear++;
//         };
//         const deQueue = (queue) => {
//             return queue[front++];
//         };

//         const [sRow, sCol] = src;
//         directions[sRow][sCol] = sDir;
//         dist[sRow][sCol] = 0;

//         const [dRow, dCol] = dst;

//         enQueue(queue, [sRow, sCol]);
//         while (isEmpty(queue) === false) {
//             const [row, col] = deQueue(queue);
//             const dir = directions[row][col];

//             for (move of MOVES) {
//                 const [nDir, rDiff, cDiff] = move;
//                 const nRow = row + rDiff;
//                 const nCol = col + cDiff;

//                 if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

//                 const dDiff = Math.abs(nDir - dir);
//                 let candidate;
//                 if (dDiff === 0) {
//                     candidate = dist[row][col] || 1;
//                 } else if (dDiff === 2) {
//                     candidate = dist[row][col] + 3;
//                 } else {
//                     candidate = dist[row][col] + 2;
//                 }

//                 if (nRow === dRow && nCol === dCol) {
//                     const dDiff = Math.abs(nDir - dDir);
//                     if (dDiff === 0) {
//                         candidate = candidate;
//                     } else if (dDiff === 2) {
//                         candidate = candidate + 2;
//                     } else {
//                         candidate = candidate + 1;
//                     }
//                 }

//                 if (candidate < dist[nRow][nCol]) {
//                     enQueue(queue, [nRow, nCol]);
//                     dist[nRow][nCol] = candidate;
//                     directions[nRow][nCol] = nDir;
//                 }
//             }
//         }
//         console.log(directions)
//         console.log(dist)
//         return dist[dRow][dCol];
//     };

//     let room = [
//         [0, 0, 0, 0],
//         [0, 1, 1, 0],
//         [0, 1, 0, 0],
//         [0, 0, 1, 1],
//     ];
//     let src = [3, 0];
//     let sDir = 3;
//     let dst = [2, 2];
//     let dDir = 2;
//     let output = robotPath2(room, src, sDir, dst, dDir);
//     console.log(output); // --> 11
// }
// test()


