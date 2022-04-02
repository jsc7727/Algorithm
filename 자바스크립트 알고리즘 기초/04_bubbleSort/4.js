const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let k = 1; k < arr.length - i; k++) {
            if (arr[k] < arr[k - 1]) {
                flag = false;
                [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
            }
        }
        if (flag) return arr;
    }
    return arr;
};
