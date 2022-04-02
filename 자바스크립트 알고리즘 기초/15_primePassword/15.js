const primePassword = (curPwd, newPwd) => {
    let dq = [[0, curPwd]];
    const checkList = new Array(10001).fill(true);
    checkList[curPwd] = false;
    if (curPwd === newPwd) return 0;
    while (dq.length > 0) {
        const [idx, pwd] = dq.shift();
        result = idx;
        for (let i = 0; i < curPwd.toString().length; i++) {
            const lst = pwd.toString().split('');
            for (let k = 0; k < 10; k++) {
                lst.splice(i, 1, k);
                const temp = Number(lst.join(''));
                if (temp === newPwd) return idx + 1;
                if (temp >= 1000 && checkList[temp]) {
                    checkList[temp] = false;
                    if (primeChecker(temp)) {
                        dq.push([idx + 1, temp]);
                    }
                }
            }
        }
    }
    return -1;
};
function primeChecker(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}