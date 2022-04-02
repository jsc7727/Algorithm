const binarySearch = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === target) return middle;
        else if (arr[middle] < target) {
            left = middle + 1;
        }
        else if (arr[middle] > target) {
            right = middle - 1;
        }
    }
    return -1;
};
