
const spiralTraversal = function (matrix) {
    const M = matrix.length;
    const N = matrix[0].length;
    const result = [];
    const checkList = new Array(M).fill(0).map(_ => new Array(N).fill(false));
    let arrow = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let now = 0;
    let x = 0;
    let y = 0;
    result.push(matrix[x][y]);
    checkList[x][y] = true;
    let flag = 0;
    while (flag < 4) {
        console.log(flag)
        const [xx, yy] = arrow[now % 4]
        const xxx = x + xx;
        const yyy = y + yy;
        if (0 <= xxx && xxx < M && 0 <= yyy && yyy < N && !checkList[xxx][yyy]) {
            x = xxx;
            y = yyy;
            flag = 0;
            checkList[xxx][yyy] = true;
            result.push(matrix[x][y]);
        }
        else {
            now++;
            flag++;
        }
    }
    console.log(result);
    return result.join('');
};

