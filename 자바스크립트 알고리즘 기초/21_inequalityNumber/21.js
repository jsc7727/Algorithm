const checker = (signsArray, inputArray) => {
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (signsArray[i] === '>' && !(inputArray[i] > inputArray[i + 1])) {
            return false;
        }
        if (signsArray[i] === '<' && !(inputArray[i] < inputArray[i + 1])) {
            return false;
        }
    }
    return true;
}

const inequalityNumber = function (signs) {
    const newSigns = signs.split(' ');
    const check = new Array(10).fill(false);
    let min = Infinity;
    let max = -1;
    const dfs = (idx, temp = []) => {
        if (idx === 0) {
            if (checker(newSigns, temp)) {
                const i = parseInt(temp.join(''));
                if (min > i) min = i;
                if (max < i) max = i;
            }
            return;
        }
        for (let i = 0; i < 10; i++) {
            if (!check[i]) {
                check[i] = true;
                temp.push(i)
                dfs(idx - 1, temp);
                check[i] = false;
                temp.pop()
            }
        }
    }
    dfs(newSigns.length + 1);
    // console.log(max, min)
    return max - min;
};