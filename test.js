// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//     let leftIdx = 0,
//         rightIdx = 0;

//     while (k > 0) {
//         // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
//         let cnt = Math.ceil(k / 2);
//         let leftMiddle = cnt,
//             rightMiddle = cnt;

//         // 엣지 케이스
//         // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
//         if (leftIdx === arr1.length) {
//             rightIdx = rightIdx + k;
//             break;
//         }

//         if (rightIdx === arr2.length) {
//             leftIdx = leftIdx + k;
//             break;
//         }

//         // 엣지 케이스
//         // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftMiddle(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
//         if (cnt > arr1.length - leftIdx) leftMiddle = arr1.length - leftIdx;
//         if (cnt > arr2.length - rightIdx) rightMiddle = arr2.length - rightIdx;

//         // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
//         if (arr1[leftIdx + leftMiddle - 1] < arr2[rightIdx + rightMiddle - 1]) {
//             leftIdx = leftIdx + leftMiddle;
//             // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
//             k = k - leftMiddle;
//         } else {
//             rightIdx = rightIdx + rightMiddle;
//             k = k - rightMiddle;
//         }
//     }

//     const leftMax = arr1[leftIdx - 1] || -1;
//     const rightMax = arr2[rightIdx - 1] || -1;

//     return Math.max(leftMax, rightMax);
// };


// arr1 = [1, 1, 2, 10];
// arr2 = [3, 3];
// result = getItemFromTwoSortedArrays(arr1, arr2, 4);
// console.log(result); // --> 3




// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `9
// `
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// console.log(input().charCodeAt())

// const isPrime = num => {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }

// const combinations = (arr, N) => {
//     const result = [];
//     if (N === 1) return arr.map(v => [v]);
//     for (let i = 0; i < arr.length; i++) {
//         const temp = combinations(arr.slice(i + 1), N - 1).map(v => [arr[i], ...v]);
//         result.push(...temp);
//     }
//     return result;
// }

// function boringBlackjack(arr, N = 3) {
//     const result = combinations(arr, N);
//     let count = 0;
//     result.forEach(v => {
//         if (isPrime(v.reduce((a, b) => a + b))) count++;
//     });
//     return count;
// }

// // let output1 = boringBlackjack([1, 2, 3, 4]);
// // console.log(output1); // 1

// let output2 = boringBlackjack([2, 4, 6, 8, 14, 27]);
// console.log(output2); // 3

// const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]);
//     // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

//     arr.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index + 1);
//         // 해당하는 fixed를 제외한 나머지 뒤
//         const combinations = getCombinations(rest, selectNumber - 1);
//         // 나머지에 대해서 조합을 구한다.
//         const attached = combinations.map((el) => [fixed, ...el]);
//         //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//         results.push(...attached);
//         // 배열 spread syntax 로 모두다 push
//     });

//     for (let i = 0; i < arr.length; i++) {

//     }

//     return results; // 결과 담긴 results return
// }
// console.log(getCombinations([2, 4, 6, 8, 14, 27], 3))


// const spiralTraversal = function (matrix) {
//     const M = matrix.length;
//     const N = matrix[0].length;
//     const result = [];
//     const checkList = new Array(M).fill(0).map(_ => new Array(N).fill(false));
//     let arrow = [[0, 1], [1, 0], [-1, 0], [0, -1]];
//     let now = 0;
//     let x = 0;
//     let y = 0;
//     result.push(matrix[x][y]);
//     checkList[x][y] = true;
//     let flag = 0;
//     while (flag < 4) {
//         console.log(flag)
//         const [xx, yy] = arrow[now % 4]
//         const xxx = x + xx;
//         const yyy = y + yy;
//         if (0 <= xxx && xxx < M && 0 <= yyy && yyy < N && !checkList[xxx][yyy]) {
//             x = xxx;
//             y = yyy;
//             flag = 0;
//             checkList[xxx][yyy] = true;
//             result.push(matrix[x][y]);
//         }
//         else {
//             now++;
//             flag++;
//         }
//     }
//     console.log(result);
//     return result.join('');
// };

// let matrix = [
//     ['A', 'B', 'C'],
//     ['D', 'E', 'F'],
//     ['G', 'H', 'I'],
// ];
// let output = spiralTraversal(matrix);


// const createMatrix = (village) => {
//     const matrix = [];
//     village.forEach((line) => {
//         const row = [];
//         for (let i = 0; i < line.length; i++) row.push(line[i]);
//         matrix.push(row);
//     });
//     return matrix;
// };


// const gossipProtocol = function (village, row, col) {
//     // TODO: 여기에 코드를 작성합니다.
//     const matrix = createMatrix(village)
//     const M = matrix.length;
//     const N = matrix[0].length;
//     let result = 0;
//     const lst = [[row, col]];
//     let index = 0;
//     matrix[row][col] = 0;
//     while (lst.length !== index) {
//         console.log(lst.length, index)
//         const [x, y] = lst[index++];
//         result = matrix[x][y];
//         for (let [xx, yy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
//             const xxx = x + xx;
//             const yyy = y + yy;
//             if (0 <= xxx && xxx < M && 0 <= yyy && yyy < N && matrix[xxx][yyy] === '1') {
//                 lst.push([xxx, yyy]);
//                 matrix[xxx][yyy] = matrix[x][y] + 1;
//             }
//         }
//     }
//     // console.log(matrix)
//     return result;
// };

// const village = [
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//     '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
// ];
// // let village = [
// //     '010111', // 첫 번째 줄
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// //     '011011',
// //     '010011',
// //     '011111',
// //     '011011',
// //     '010011',
// // ];
// const row = 1;
// const col = 2;
// let output = gossipProtocol(village, row, col);
// console.log(output); // --> 3


// const checker = (signsArray, inputArray) => {
//     for (let i = 0; i < inputArray.length - 1; i++) {
//         if (signsArray[i] === '>' && !(inputArray[i] > inputArray[i + 1])) {
//             return false;
//         }
//         if (signsArray[i] === '<' && !(inputArray[i] < inputArray[i + 1])) {
//             return false;
//         }
//     }
//     return true;
// }

// const inequalityNumber = function (signs) {
//     const newSigns = signs.split(' ');
//     const check = new Array(10).fill(false);
//     let min = 100000000000000000;
//     let max = 0;
//     const dfs = (idx, temp = []) => {
//         if (idx === 0) {
//             if (checker(newSigns, temp)) {
//                 const i = parseInt(temp.join(''));
//                 if (min > i) {
//                     min = i;
//                     console.log(i)
//                 };
//                 if (max < i) max = i;
//             }
//             return;
//         }
//         for (let i = 0; i < 10; i++) {
//             if (!check[i]) {
//                 check[i] = true;
//                 temp.push(i)
//                 dfs(idx - 1, temp);
//                 check[i] = false;
//                 temp.pop()
//             }
//         }
//     }
//     dfs(newSigns.length + 1);
//     console.log(max, min)
//     return max - min;
// };

// // let output = inequalityNumber('<');
// // console.log(output); // --> 88 (89 - 01)

// output = inequalityNumber('> > > > < > < > >');
// console.log(output); // --> 876 (897 - 021)


// const test3 = (board, commands) => {
//     const N = board.length;
//     const M = board[0].length;
//     const checkList = new Array(N).fill(null).map(_ => new Array(M).fill(false));
//     let result = 0;
//     let x1 = 0, y1 = 0;
//     const dic = {
//         'U': [-1, 0],
//         'D': [1, 0],
//         'L': [0, -1],
//         'R': [0, 1]
//     }
//     for (let command of commands) {
//         const [x2, y2] = dic[command];
//         const x3 = x1 + x2;
//         const y3 = y1 + y2;
//         console.log(command, result, x3, y3)
//         if (0 <= x3 && x3 < N && 0 <= y3 && y3 < M) {
//             if (!checkList[x3][y3] && board[x3][y3] !== 0) {
//                 result += board[x3][y3];
//                 checkList[x3][y3] = true;
//             }
//             x1 = x3;
//             y1 = y3;
//         }
//     }
//     return result;
// }
// const board2 =
//     [
//         [111, 0, 1],
//         [99, 1, 1],
//         [1, 0, 0]
//     ]
// const output2 = test3(board2, 'UUUDD')
// console.log(output2); // 878


// const insertionSort = function (arr) {
//     for (let i = 1; i < arr.length; i++) {
//         const temp = arr[i];
//         let j;
//         for (j = i; j >= 0; j--) {
//             if (arr[j - 1] > temp) {
//                 arr[j] = arr[j - 1]
//             }
//             else {
//                 break;
//             }
//         }
//         arr[j] = temp;
//         console.log(arr)
//     }
//     return arr;
// };


// let output = insertionSort([5, 4, 3, 2, 1]);
// console.log(output); // --> [1, 3, 21]

class Deque {
    constructor() {
        this.front = this.back = undefined;
    }
    addFront(value) {
        if (!this.front) this.front = this.back = { value };
        else this.front = this.front.next = { value, prev: this.front };
    }
    removeFront() {
        let value = this.peekFront();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.front = this.front.prev).next = undefined;
        return value;
    }
    peekFront() {
        return this.front && this.front.value;
    }
    addBack(value) {
        if (!this.front) this.front = this.back = { value };
        else this.back = this.back.prev = { value, next: this.back };
    }
    removeBack() {
        let value = this.peekBack();
        if (this.front === this.back) this.front = this.back = undefined;
        else (this.back = this.back.next).back = undefined;
        return value;
    }
    peekBack() {
        return this.back && this.back.value;
    }
}

function solution(grid) {
    var answer = 0;
    const rotate = (grid, arrow, t) => {
        if (arrow === 'u') {
            const y = t;
            const firstData = grid[0][y];
            for (let x = 0; x < 3; x++) {
                grid[x][y] = grid[x + 1][y];
            }
            grid[3][y] = firstData;
        }
        if (arrow === 'd') {
            const y = t;
            const firstData = grid[3][y];
            for (let x = 3; x > 0; x--) {
                grid[x][y] = grid[x - 1][y];
            }
            grid[0][y] = firstData;
        }
        if (arrow === 'l') {
            const x = t;
            let firstData = grid[x][0];
            for (let y = 1; y < 4; y++) {
                grid[x][y - 1] = grid[x][y];
            }
            grid[x][3] = firstData;
        }
        if (arrow === 'r') {
            const x = t;
            grid[x] = [grid[x][3], ...grid[x].slice(0, 3)]
        }
    }

    const check = (grid, newGrid) => {
        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                if (grid[x][y] !== newGrid[x][y]) return false;
            }
        }
        return true;
    }

    const copyArr = (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let temp = [];
            for (let j = 0; j < arr[0].length; j++) {
                temp.push(arr[i][j]);
            }
            newArr.push(temp);
        }
        return newArr;
    }

    const bfs = () => {
        // const deque = [[grid, 0]];
        let deque = new Deque();
        deque.addFront([grid, 0]);
        while (true) {
            const [newGrid, count] = deque.removeFront();
            if (count !== 0 && check([[1, 1, 2, 2], [1, 1, 2, 2], [2, 2, 1, 1], [2, 2, 1, 1]], newGrid)) {
                answer = count;
                break;
            }
            else {
                // console.log(count)

                for (let i = 0; i < 4; i++) {
                    for (let arrow of ['u', 'd', 'l', 'r']) {
                        const nextNewGrid = copyArr(newGrid);
                        rotate(nextNewGrid, arrow, i);
                        // deque.push([nextNewGrid, count + 1]);
                        deque.addBack([nextNewGrid, count + 1]);
                    }
                }
            }
        }
    }
    bfs();
    return answer;
}

const arr = [[1, 1, 1, 1], [2, 1, 2, 2], [2, 2, 2, 1], [1, 1, 2, 2]];
console.log(solution(arr))
// const check = (grid, newGrid) => {
//     for (let x = 0; x < 4; x++) {
//         for (let y = 0; y < 4; y++) {
//             if (grid[x][y] !== newGrid[x][y]) return false;
//         }
//     }
//     return true;
// }

// console.log(check([[1, 1, 1, 2], [1, 1, 1, 2], [2, 2, 2, 1], [1, 2, 2, 2]], [[1, 2, 1, 2], [1, 1, 1, 2], [2, 2, 2, 1], [1, 2, 2, 2]]))