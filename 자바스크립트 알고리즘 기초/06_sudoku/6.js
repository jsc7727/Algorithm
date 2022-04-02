const sudoku = function (board) {
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