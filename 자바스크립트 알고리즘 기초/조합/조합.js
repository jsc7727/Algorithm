const combination = (arr, n) => {
    const result = []
    if (n === 1) return arr.map(v => [v]);
    for (let i = 0; i < arr.length; i++) {
        const res = combination(arr.slice(i + 1), n - 1).map(v => [arr[i], ...v]);
        result.push(...res);
    }
    return result;
}
console.log(combination([1, 2, 3], 2));