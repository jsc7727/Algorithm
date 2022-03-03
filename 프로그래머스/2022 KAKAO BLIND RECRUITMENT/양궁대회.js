// https://programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
    let answer = [-1];
    let resValue = -1;
    const dfs = (n, idx = 0, arr = new Array(11).fill(0)) => {
        if (idx === arr.length) {
            let ap = 0;
            let ri = 0;
            for (let i = 0; i < 11; i++) {
                const apIdx = i;
                const riIdx = 10 - i;
                const apValue = info[apIdx];
                const riValue = arr[riIdx];
                if (apValue === 0 && riValue === 0) continue;
                if (apValue >= riValue) {
                    ap += (10 - i);
                }
                else {
                    ri += (10 - i);
                }
            }
            if ((ri - ap) > 0 && (ri - ap) >= resValue) {
                answer = [...arr];
                resValue = (ri - ap)
            }
            return;
        }
        for (let i = 0; i <= n; i++) {
            arr[idx] = i;
            dfs(n - i, idx + 1, arr)
            arr[idx] = 0;
        }
    }
    dfs(n)
    if (resValue === -1) return answer;
    console.log(resValue)
    answer.reverse();
    const s = answer.reduce((a, b) => a + b);
    answer[answer.length - 1] += (n - s);
    return answer;
}

let n = 1;
let info = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(solution(n, info));