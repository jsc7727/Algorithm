
const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        const row = [];
        for (let i = 0; i < line.length; i++) row.push(line[i]);
        matrix.push(row);
    });
    return matrix;
};


const gossipProtocol = function (village, row, col) {
    const matrix = createMatrix(village)
    const M = matrix.length;
    const N = matrix[0].length;
    let result = 0;
    const lst = [[row, col]];
    let index = 0;
    matrix[row][col] = 0;
    while (lst.length !== index) {
        console.log(lst.length, index)
        const [x, y] = lst[index++];
        result = matrix[x][y];
        for (let [xx, yy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const xxx = x + xx;
            const yyy = y + yy;
            if (0 <= xxx && xxx < M && 0 <= yyy && yyy < N && matrix[xxx][yyy] === '1') {
                lst.push([xxx, yyy]);
                matrix[xxx][yyy] = matrix[x][y] + 1;
            }
        }
    }
    // console.log(matrix)
    return result;
};