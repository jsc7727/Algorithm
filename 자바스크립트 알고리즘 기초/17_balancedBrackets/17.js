const balancedBrackets = function (str) {
    let temp = [];
    checkLeft = ['[', '{', '('];
    checkRight = [']', '}', ')'];
    for (v of str) {
        if (checkLeft.includes(v)) {
            temp.push(v);
            continue;
        }
        else if (checkRight.includes(v)) {
            if (temp.length > 0 && temp[temp.length - 1] === checkLeft[checkRight.indexOf(v)]) {
                temp.splice(temp.length - 1)
            }
            else if (temp.length === 0) {
                return false;
            }
        }
    }
    if (temp.length > 0) return false;
    else return true;
};
