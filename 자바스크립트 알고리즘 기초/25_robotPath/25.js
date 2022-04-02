const robotPath = function (room, src, dst) {
    const xLen = room[0].length;
    const yLen = room.length;
    let dq = [[1, src]];
    while (dq.length > 0) {
        const [idx, [y1, x1]] = dq.shift();
        for (const [y2, x2] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            const y3 = y2 + y1, x3 = x2 + x1;
            if (x3 >= 0 && x3 < xLen && y3 >= 0 && y3 < yLen && room[y3][x3] === 0) {
                if (y3 === dst[0] && x3 === dst[1]) {
                    return idx;
                }
                room[y3][x3] = 1;
                dq.push([idx + 1, [y3, x3]]);
            }
        }
    }
    return -1;
};
