const mergeSort = function (arr) {
    if (arr.length > 1) {
        const arr1 = mergeSort(arr.slice(0, arr.length / 2));
        const arr2 = mergeSort(arr.slice(arr.length / 2));
        const newArr = [];
        arr1_idx = 0;
        arr2_idx = 0;
        while (arr1.length > arr1_idx || arr2.length > arr2_idx) {
            if (arr1.length === arr1_idx) {
                newArr.push(arr2[arr2_idx]);
                arr2_idx++;
            }
            else if (arr2.length === arr2_idx) {
                newArr.push(arr1[arr1_idx]);
                arr1_idx++;
            }
            else {
                if (arr1[arr1_idx] > arr2[arr2_idx]) {
                    newArr.push(arr2[arr2_idx]);
                    arr2_idx++;
                }
                else {
                    newArr.push(arr1[arr1_idx]);
                    arr1_idx++;
                }
            }
        }
        return newArr;
    }
    return arr;
};
