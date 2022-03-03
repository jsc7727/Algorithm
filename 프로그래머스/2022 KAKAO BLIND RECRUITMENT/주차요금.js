// https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
    const dic = {};
    const result = {}
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const getM = (time) => {
        const [hour, minute] = time.split(':');
        return (+hour) * 60 + (+minute);
    }
    const getPrice = (diff) => {
        if (diff < basicTime) return basicFee;
        return basicFee + (Math.ceil((diff - basicTime) / unitTime) * unitFee);
    }

    for (let record of records) {
        const [time, number, state] = record.split(' ');
        if (state === 'IN') {
            dic[number] = { time, state };
            if (result[number] === undefined) {
                result[number] = 0;
            }
        }
        else {
            const { time: inTime } = dic[number];
            dic[number].state = "OUT"
            const diff = getM(time) - getM(inTime);
            result[number] += diff;
        }
    }
    Object.entries(dic).forEach(v => {
        const [number, { time, state }] = v;
        if (state === "IN") {
            const endTime = "23:59";
            const diff = getM(endTime) - getM(time);
            result[number] += diff;
        }
    })
    return Object.entries(result).sort((a, b) => {
        return (+a[0]) - (+b[0]);
    }).map(v => {
        console.log(v[1])
        return getPrice(v[1]);
    })
}