function orderOfPresentation(N, K) {
    const recursive = (n) => {
        if (n <= 1) return 1;
        return n * recursive(n - 1);
    };
    let order = 0;
    const isUsed = new Array(N + 1).fill(false);
    for (let i = 0; i < K.length; i++) {
        isUsed[K[i]] = true;
        const formerCnt = isUsed.slice(1, K[i]).filter((el) => el === false).length * recursive(N - i - 1);
        order = order + formerCnt;
    }
    return order;
}
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output); // 6