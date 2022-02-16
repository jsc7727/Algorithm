const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    let leftIdx = 0,
        rightIdx = 0;

    while (k > 0) {
        // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
        let cnt = Math.ceil(k / 2);
        let leftMiddle = cnt,
            rightMiddle = cnt;

        // 엣지 케이스
        // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
        if (leftIdx === arr1.length) {
            rightIdx = rightIdx + k;
            break;
        }

        if (rightIdx === arr2.length) {
            leftIdx = leftIdx + k;
            break;
        }

        // 엣지 케이스
        // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftMiddle(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
        if (cnt > arr1.length - leftIdx) leftMiddle = arr1.length - leftIdx;
        if (cnt > arr2.length - rightIdx) rightMiddle = arr2.length - rightIdx;

        // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
        if (arr1[leftIdx + leftMiddle - 1] < arr2[rightIdx + rightMiddle - 1]) {
            leftIdx = leftIdx + leftMiddle;
            // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
            k = k - leftMiddle;
        } else {
            rightIdx = rightIdx + rightMiddle;
            k = k - rightMiddle;
        }
    }

    const leftMax = arr1[leftIdx - 1] || -1;
    const rightMax = arr2[rightIdx - 1] || -1;

    return Math.max(leftMax, rightMax);
};


arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3