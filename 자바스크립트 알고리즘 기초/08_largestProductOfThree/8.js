const largestProductOfThree = function (arr) {
    const temp = arr.sort((a, b) => a - b);
    let temp1 = temp[0] * temp[1] * temp[temp.length - 1];
    let temp2 = temp[temp.length - 3] * temp[temp.length - 2] * temp[temp.length - 1];
    return Math.max(temp1, temp2);
};
