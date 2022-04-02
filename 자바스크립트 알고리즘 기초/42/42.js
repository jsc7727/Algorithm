const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        const row = [];
        for (let i = 0; i < line.length; i++) row.push(line[i]);
        matrix.push(row);
    });
    return matrix;
};

const combination = (arr, n) => {
    const result = []
    if (n === 1) return arr.map(v => [v]);
    for (let i = 0; i < arr.length; i++) {
        const res = combination(arr.slice(i + 1), n - 1).map(v => [arr[i], ...v]);
        result.push(...res);
    }
    return result;
}

const getAgents = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === '2') {
                result.push([i, j]);
            }
        }
    }
    return result;
}

const gossipProtocol2 = function (village, num) {
    let answer = 0;
    const n = village.length;
    const m = village[0].length;
    const isValid = (x, y) => (0 <= x && x < n && 0 <= y && y < m);
    const arrow = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    console.log(village, village[1][1] === '0')
    const agents = getAgents(village);
    const selectAgents = combination(agents, num);

    const bfs = (selectAgent) => {
        let deque = [...selectAgent];
        const checkList = new Array(n).fill(null).map(_ => new Array(m).fill(0));
        let answer = 0;
        while (deque.length > 0) {
            const [x, y] = deque.shift()
            for (let [xx, yy] of arrow) {
                const [xxx, yyy] = [x + xx, y + yy];
                if (isValid(xxx, yyy) && village[xxx][yyy] === '1' && checkList[xxx][yyy] === 0) {
                    deque.push([xxx, yyy])
                    checkList[xxx][yyy] = checkList[x][y] + 1;
                    if (checkList[xxx][yyy] > answer) {
                        answer = checkList[xxx][yyy];
                    }

                }
            }
        }
        return answer;
    }
    for (let i of selectAgents) {
        console.log(i)
    }

    const res = bfs(selectAgents[0])
    console.log(res)
};

let village = [
    '0022', // 첫 번째 줄
    '1010',
    '1010',
    '1121',
];
let num = 1;
let output = gossipProtocol2(village, num);
console.log(output); // --> 0 (이미 모든 주민이 정보를 알고 있는 상태)

// village = [
//     '1001212',
//     '1201011',
//     '1102001',
//     '2111102',
//     '0012111',
//     '1111101',
//     '2121102',
// ];
// num = 5;
// output = gossipProtocol2(village, num);
// console.log(output); // --> 3 

