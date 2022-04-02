const LSCS = function (arr) {
    const arrLen = arr.length;
    let max = arr[0];
    for (let i = 0; i < arrLen; i++) {
        if (arr[i] > max) max = arr[i];
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum > max) max = sum;
        }
    }
    return max;
};


const LSCS2 = function (arr) {
    const arrLen = arr.length;
    let subMax = 0;
    let max = arr[0];
    for (let i = 0; i < arrLen; i++) {
        if (arr[i] > max) max = arr[i];
        subMax = Math.max(subMax + arr[i], arr[i]);
        if (subMax > max) max = subMax;
    }
    return max;
};

let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])

LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7 ([1, 2, 3, -4, 5])

LSCS([10, -11, 11]);
console.log(output); // --> 11 ([11])