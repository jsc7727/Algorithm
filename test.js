// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//     let leftIdx = 0,
//         rightIdx = 0;

//     while (k > 0) {
//         // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
//         let cnt = Math.ceil(k / 2);
//         let leftMiddle = cnt,
//             rightMiddle = cnt;

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

//         // 엣지 케이스
//         // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftMiddle(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
//         if (cnt > arr1.length - leftIdx) leftMiddle = arr1.length - leftIdx;
//         if (cnt > arr2.length - rightIdx) rightMiddle = arr2.length - rightIdx;

//         // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
//         if (arr1[leftIdx + leftMiddle - 1] < arr2[rightIdx + rightMiddle - 1]) {
//             leftIdx = leftIdx + leftMiddle;
//             // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
//             k = k - leftMiddle;
//         } else {
//             rightIdx = rightIdx + rightMiddle;
//             k = k - rightMiddle;
//         }
//     }

//     const leftMax = arr1[leftIdx - 1] || -1;
//     const rightMax = arr2[rightIdx - 1] || -1;

//     return Math.max(leftMax, rightMax);
// };


// arr1 = [1, 1, 2, 10];
// arr2 = [3, 3];
// result = getItemFromTwoSortedArrays(arr1, arr2, 4);
// console.log(result); // --> 3




// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `9
// `
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// console.log(input().charCodeAt())

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const combinations = (arr, N) => {
    const result = [];
    if (N === 1) return arr.map(v => [v]);
    for (let i = 0; i < arr.length; i++) {
        const temp = combinations(arr.slice(i + 1), N - 1).map(v => [arr[i], ...v]);
        result.push(...temp);
    }
    return result;
}

function boringBlackjack(arr, N = 3) {
    const result = combinations(arr, N);
    let count = 0;
    result.forEach(v => {
        if (isPrime(v.reduce((a, b) => a + b))) count++;
    });
    return count;
}

// let output1 = boringBlackjack([1, 2, 3, 4]);
// console.log(output1); // 1

let output2 = boringBlackjack([2, 4, 6, 8, 14, 27]);
console.log(output2); // 3

// const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]);
//     // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

//     arr.forEach((fixed, index, origin) => {
//         const rest = origin.slice(index + 1);
//         // 해당하는 fixed를 제외한 나머지 뒤
//         const combinations = getCombinations(rest, selectNumber - 1);
//         // 나머지에 대해서 조합을 구한다.
//         const attached = combinations.map((el) => [fixed, ...el]);
//         //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//         results.push(...attached);
//         // 배열 spread syntax 로 모두다 push
//     });

//     for (let i = 0; i < arr.length; i++) {

//     }

//     return results; // 결과 담긴 results return
// }
// console.log(getCombinations([2, 4, 6, 8, 14, 27], 3))