const LIS = function (arr) {
    const arrLen = arr.length;
    const lis = Array(arrLen).fill(1);
    for (let i = 1; i < arrLen; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] <= lis[j]) {
                lis[i] = lis[j] + 1;
            }
        }
    }
    return Math.max(...lis);
};