// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//     let leftIdx = 0,
//         rightIdx = 0;

//     while (k > 0) {
//         console.log(k, leftIdx, rightIdx)
//         // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
//         let cnt = Math.ceil(k / 2);
//         let leftStep = cnt,
//             rightStep = cnt;

//         // 엣지 케이스
//         // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
//         if (leftIdx === arr1.length) {
//             rightIdx = rightIdx + k;
//             break;
//         }

//         if (rightIdx === arr2.length) {
//             leftIdx = leftIdx + k;
//             break;
//         }
//         console.log(k, leftStep, rightStep, leftIdx, rightIdx)
//         console.log(arr1.slice(leftIdx, leftStep))
//         console.log(arr2.slice(rightIdx, rightStep))
//         console.log('--')

//         // 엣지 케이스
//         // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
//         if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
//         if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

//         console.log(arr1.slice(leftIdx, leftStep))
//         console.log(arr2.slice(rightIdx, rightStep))
//         console.log('--')

//         // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
//         if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
//             leftIdx = leftIdx + leftStep;
//             // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
//             k = k - leftStep;
//         } else {
//             rightIdx = rightIdx + rightStep;
//             k = k - rightStep;
//         }
//         console.log(arr1.slice(leftIdx, leftStep))
//         console.log(arr2.slice(rightIdx, rightStep))
//         console.log("====================")

//     }

//     leftMax = arr1[leftIdx - 1] || -1;
//     rightMax = arr2[rightIdx - 1] || -1;

//     return Math.max(leftMax, rightMax);
// };

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 5, 9];
// let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
// console.log(result); // --> 8




const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    const n = arr1.length;
    const m = arr2.length;
    if (n > m) {
        return getItemFromTwoSortedArrays(arr2, arr1, k);
    }
    let low = Math.max(0, k - m)
    let high = Math.min(k, n);
    while (low <= high) {
        const cut1 = (low + high) >> 1;
        const cut2 = k - cut1;
        const l1 = cut1 == 0 ? -1 : arr1[cut1 - 1];
        const l2 = cut2 == 0 ? -1 : arr2[cut2 - 1];
        const r1 = cut1 == n ? 1000000 : arr1[cut1];
        const r2 = cut2 == m ? 1000000 : arr2[cut2];
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }
        else if (l1 > r2) {
            high = cut1 - 1;
        }
        else {
            low = cut1 + 1;
        }
    }
    return 1;
};

// const arr1 = [1, 1, 2, 10];
// const arr2 = [2, 3, 7, 12];
// let result = getItemFromTwoSortedArrays(arr1, arr2, 7);
// console.log(result)

const arr1 = [1, 1, 2, 10];
const arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3