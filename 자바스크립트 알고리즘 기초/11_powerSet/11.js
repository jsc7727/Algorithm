const powerSet = (str) => {
    const lst = Array.from(new Set(str.split(''))).sort();
    const result = [];
    const re = (idx, s) => {
        if (idx === lst.length) {
            result.push(s);
            return;
        }
        else {
            re(idx + 1, s + lst[idx]);
            re(idx + 1, s);
        }
    }
    re(0, '')
    return result.sort();
};
