// https://www.acmicpc.net/problem/1063

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `C1 B1 3
    L
    T
    LB`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


const dictX = {
    1: 7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1, 8: 0, 7: 1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7, 0: 8,
}

const dictY = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H',
}
const dictArrow = {
    'R': [0, 1], 'L': [0, -1], 'B': [1, 0], 'T': [-1, 0], 'RT': [-1, 1], 'LT': [-1, -1], 'RB': [1, 1], 'LB': [1, -1],
}


let [king, stone, C] = input().split(' ');
king = king.split('');
king = [dictX[king[1]], dictY[king[0]]];
stone = stone.split('');
stone = [dictX[stone[1]], dictY[stone[0]]];
const N = M = 8;
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;

const getXY = (piece, command) => {
    const [x1, y1] = piece;
    const [x2, y2] = dictArrow[command];
    const [x3, y3] = [x1 + x2, y1 + y2];
    if (isValid(x3, y3)) {
        return [true, [x3, y3]];
    }
    return [false, []];
}

for (let i = 0; i < +C; i++) {
    const command = input().trim();
    const [valid, newKing] = getXY(king, command)
    if (!valid) continue;
    else {
        if (newKing[0] === stone[0] && newKing[1] === stone[1]) {
            const [valid, newStone] = getXY(stone, command)
            if (!valid) continue;
            stone = newStone;
            king = newKing;
        }
        else {
            king = newKing;
        }
    }
}
console.log(`${dictY[king[1]]}${dictX[king[0]]}`)
console.log(`${dictY[stone[1]]}${dictX[stone[0]]}`)