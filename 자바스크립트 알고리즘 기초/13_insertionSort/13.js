const insertionSort = function (arr, callback = (v) => v) {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j;
        for (j = i; j >= 0; j--) {
            if (callback(arr[j - 1]) > callback(temp)) {
                arr[j] = arr[j - 1]
            }
            else {
                break;
            }
        }
        arr[j] = temp;
    }
    return arr;
};
