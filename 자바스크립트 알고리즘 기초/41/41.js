const countIslands = function (grid) {
    const n = grid.length;
    const m = grid[0].length;
    let answer = 0;
    const isValid = (x, y) => (0 <= x && x < n && 0 <= y && y < m);
    const arrow = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const checkList = new Array(n).fill(null).map(_ => new Array(m).fill(false));
    const dfs = (x, y) => {
        checkList[x][y] = true;
        for (let [xx, yy] of arrow) {
            const [xxx, yyy] = [x + xx, y + yy];
            if (isValid(xxx, yyy) && grid[xxx][yyy] === '1' && checkList[xxx][yyy] === false) {
                dfs(xxx, yyy);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1' && checkList[i][j] === false) {
                dfs(i, j);
                answer++;
            }
        }
    }
    return answer;
};

let grid = [
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['1', '1', '0', '0'],
];
let result = countIslands(grid);
console.log(result); // --> 1
