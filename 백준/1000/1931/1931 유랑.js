const log = console.log;
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `11
1 4
3 5
5 7
0 6
3 8
5 9
6 10
8 11
8 12
2 13
12 14
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let n = input();

let meetings = [];

for (let i = 0; i < n; i++) {
    let [start, end] = input()
        .split(" ")
        .map((el) => +el);
    meetings.push([start, end]);
}

// log(meetings);

// 정렬 후 필터링

// 1. 종료 시간이 빠른 순으로 정렬해 첫 번째로 빠른 것을 선택
// 2. 정렬된 데이터 중 시작 시간이 가장 빠른 종료시간보다 빠른 경우 후보 제거
// 3. 목록에서 제거된 것들 중에 가장 빠른 것을 선택
// 4. 목록이 비어있을 때까지 반복

let candidates = [];

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < meetings[i].length; j++) {
//         log(meetings[i][j]);
//     }
// }

while (true) {
    meetings = meetings.sort((meeting1, meeting2) => meeting1[1] - meeting2[1]); // 1. 종료시간이 빠른 순으로 정렬
    candidates.push(meetings.shift()); // 2. 첫 번째로 빠른 것을 선택
    // log(candidates);
    meetings = meetings.filter(
        // 3. 정렬된 데이터 중 시작 시간이 후보군의 종료시간보다 따른 경우 후보 제거
        (meeting) => meeting[0] > candidates[candidates.length - 1][1]
    );
    if (meetings.length === 0) {
        // 4. 정렬된 데이터가 없는 경우 종료
        break;
    }
}

log(candidates.length);