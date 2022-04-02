function radixSort(arr) {
    let count = 0;
    while (true) {
        const [res, resBool] = radix(count, arr);
        if (resBool) return res;
        arr = res;
        count++;
    }
}

const radix = (idx, arr) => {
    const newArr = new Array(10).fill(null).map(_ => new Array());
    const newArr1 = new Array(10).fill(null).map(_ => new Array());
    for (let v of arr) {
        const res = Math.floor(Math.abs(v) / (10 ** idx)) % 10;
        if (v < 0) {
            newArr[res].push(v);
        }
        else {
            newArr1[res].push(v);
        }
    }
    const flag = arr.length === newArr[0].length + newArr1[0].length;
    if (flag) {
        return [[...newArr.flat().reverse(), ...newArr1.flat()], flag];
    }
    else {
        return [[...newArr.flat(), ...newArr1.flat()], flag];
    }
}

let output = radixSort([-9091,
-9091,
-9098,
    123,
-9081,
-9082,
-9088,
-9070,]);
console.log(output); // --> [1, 3, 21]