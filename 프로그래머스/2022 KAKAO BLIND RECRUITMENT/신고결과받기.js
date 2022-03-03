// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    const dic = {}
    const dic1 = {}
    for (let i of id_list) {
        dic[i] = new Set([]);
        dic1[i] = 0;
    }
    for (let i of report) {
        const [report_id, stop_id] = i.split(' ');
        dic[stop_id].add(report_id);
    }
    const result = Object.entries(dic).filter(v => v[1].size >= k);
    for (let i of result) {
        for (let k of i[1]) {
            dic1[k]++;
        }
    }
    return Object.values(dic1)
}