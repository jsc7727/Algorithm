const quickSort = function (arr, func = (v) => v) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (func(arr[i]) <= func(pivot)) left.push(arr[i]);
        else if (func(arr[i]) > func(pivot)) right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};