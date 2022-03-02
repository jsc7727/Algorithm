const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `
    0 3 5 4 6 9 2 7 8
    7 8 2 1 0 5 6 0 9
    0 6 0 2 7 8 1 3 5
    3 2 1 0 4 6 8 9 7
    8 0 4 9 1 3 5 0 6
    5 9 6 8 2 0 4 1 3
    9 1 7 6 5 2 0 8 0
    6 0 3 7 0 1 9 5 2
    2 5 8 3 9 4 7 6 0
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const board = [];
for (let i = 0; i < 9; i++) {
    board.push(input().trim().split(' ').map(v => parseInt(v)));
}

// for (let i of board) {
//     console.log(i.join(' '));
// }

const sudoku = board => {
    const len = board.length;
    const getBoxNum = (row, col) => {
        return (Math.floor(row / 3) * 3) + (Math.floor(col / 3))
    };

    const arr = [];
    const rowUsed = [];
    const colUsed = [];
    const boxUsed = [];
    for (let row = 0; row < len; row++) {
        rowUsed.push(Array(len + 1).fill(false));
        colUsed.push(Array(len + 1).fill(false));
        boxUsed.push(Array(len + 1).fill(false));
    }


    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            if (board[row][col] === 0) {
                arr.push([row, col]);
            } else {
                const num = board[row][col];
                const box = getBoxNum(row, col);
                rowUsed[row][num] = true;
                colUsed[col][num] = true;
                boxUsed[box][num] = true;
            }
        }
    }

    const isValid = (row, col, num) => {
        const box = getBoxNum(row, col);
        return (
            rowUsed[row][num] === false &&
            colUsed[col][num] === false &&
            boxUsed[box][num] === false
        );
    };

    const toggleNum = (row, col, num) => {
        const box = getBoxNum(row, col);
        board[row][col] = num;
        rowUsed[row][num] = colUsed[col][num] = boxUsed[box][num] = !rowUsed[row][num];
    };

    const recursive = (idx, arr, board) => {
        if (idx === arr.length) {
            return true;
        }

        const [row, col] = arr[idx];
        for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num) === true) {
                toggleNum(row, col, num);
                if (recursive(idx + 1, arr, board) === true) {
                    return true;
                }
                toggleNum(row, col, num);
            }
        }
        return false;
    };

    recursive(0, arr, board);
    return board;
};

sudoku(board)

for (let i of board) {
    console.log(i.join(' '));
}