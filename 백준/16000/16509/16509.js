const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 2
    2 5
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [sangX, sangY] = input().trim().split(' ').map(v => +v);
let [kingX, kingY] = input().trim().split(' ').map(v => +v);
const [xEnd, yEnd] = [10, 9]
const board = new Array(xEnd).fill(null).map(_ => new Array(yEnd).fill(null).map(_ => 0));
board[sangX][sangY] = 1;
board[kingX][kingY] = -1;

const arrows = [[-1, 0], [0, 1], [1, 0], [0, -1]] // 상 우 하 좌
const arrows2 = [[[-1, -1], [-1, 1]], [[-1, 1], [1, 1]], [[1, 1], [1, -1]], [[1, -1], [-1, -1]]] // 상 => 좌 우 , 우 => 상 하, 하 => 우 좌, 좌 => 하 상
const bfs = () => {
    const isValid = (x, y) => 0 <= x && x < xEnd && 0 <= y && y < yEnd;
    const isKingPlace = (x, y) => board[x][y] === -1;
    const q = [[sangX, sangY]];
    while (q.length > 0) {
        const [nowX, nowY] = q.shift();
        for (let i = 0; i < 4; i++) {
            const [arrowX, arrowY] = arrows[i];
            const [x, y] = [arrowX + nowX, arrowY + nowY];
            // console.log(x, y)
            if (!isValid(x, y) || isKingPlace(x, y)) continue;
            for (let j = 0; j < 2; j++) {
                const [arrow2X, arrow2Y] = arrows2[i][j];
                const [xx, yy] = [x + arrow2X, y + arrow2Y];
                // console.log("2 : ", xx, yy)
                if (!isValid(xx, yy) || isKingPlace(xx, yy)) continue;
                const [xxx, yyy] = [xx + arrow2X, yy + arrow2Y];
                // console.log("3 : ", xxx, yyy)
                if (isValid(xxx, yyy)) {
                    if (isKingPlace(xxx, yyy)) {
                        return board[nowX][nowY];
                    }
                    else if (board[xxx][yyy] === 0) {
                        board[xxx][yyy] = board[nowX][nowY] + 1;
                        q.push([xxx, yyy]);
                    }
                }
            }
        }
    }
}

// for (let i of board) {
//     console.log(i.join(''))
// }
console.log(bfs());