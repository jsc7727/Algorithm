function ocean(target, type) {
    let dp = [1];

    for (let i = 1; i <= target; i++) {
        dp[i] = 0;
    }
    console.log(dp)

    for (let i = 0; i < type.length; i++) {
        console.log(dp)

        for (let j = 1; j <= target; j++) {
            console.log(type[i], j);
            if (type[i] <= j) {
                console.log(dp[j - type[i]])
                dp[j] += dp[j - type[i]];
            }
        }
    }

    return dp[target];
}

let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

// let output = ocean(100, [10, 20, 50]);
// console.log(output); // 10

// let output = ocean(30, [5, 6, 7]);
// console.log(output); // 4