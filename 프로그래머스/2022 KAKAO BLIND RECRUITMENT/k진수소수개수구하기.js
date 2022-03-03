// https://programmers.co.kr/learn/courses/30/lessons/92335

const nary = (n, k, result = "") => {
    if (n === 0) return result.split("").reverse().join("");
    const a = n % k;
    const b = Math.floor(n / k);
    return nary(b, k, result + a.toString());
}
const prime = (n) => {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    var answer = 0;
    let result = nary(n, k);
    console.log(result.split('0').filter(v => v.length > 0))
    result = result.split('0').filter(v => v.length > 0)
    result.forEach(v => {
        const res = prime(+v);
        if (res) answer++;
        if (res) console.log(v)
    })
    return answer;
}