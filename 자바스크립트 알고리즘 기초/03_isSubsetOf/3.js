const isSubsetOf = function (base, sample) {
    const checkList = {};
    base.forEach(v => checkList[v] = true)
    for (value of sample) {
        if (!checkList.hasOwnProperty(value)) return false;
    }
    return true;
};
