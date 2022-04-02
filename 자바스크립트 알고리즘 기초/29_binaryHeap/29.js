// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);

}

function insert(heap, item) {
    heap.push(item);
    let currentIdx = heap.length - 1;
    let parentIdx = getParentIdx(currentIdx);
    while (parentIdx >= 0 && heap[currentIdx] > heap[parentIdx]) {
        swap(parentIdx, currentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = getParentIdx(currentIdx)
    }
    return heap;
}


function removeRoot(heap) {
    // TODO: 여기에 코드를 작성합니다.
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};

const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    return minHeap;
};



let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]

// output = heapSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

// output = heapSort([4, 10, 3, 5, 1]);
// console.log(output); // --> [1, 3, 4, 5, 10]