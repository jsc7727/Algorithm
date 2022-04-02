const LPS = function (str) {
    let result = 0;
    let idx = 1;
    while (str.length >= (idx * 2)) {
        const left = str.slice(0, idx);
        const right = str.slice(str.length - idx);
        if (left === right) result = idx;
        idx += 1;
    }
    return result;
};
