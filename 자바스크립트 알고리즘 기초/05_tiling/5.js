// let tiling = function (n) {
//   const memo = [0, 1, 2];
//   const aux = (size) => {
//     if (memo[size] !== undefined) return memo[size];
//     if (size <= 2) return memo[n];
//     memo[size] = aux(size - 1) + aux(size - 2);
//     return memo[size];
//   };
//   return aux(n);
// };

let tiling = function (n) {
    const memo = [1, 2];
    for (let i = 3; i <= n; i++) {
        memo[i % 2 === 1 ? 0 : 1] = memo[0] + memo[1];
    }
    return memo[n % 2 === 1 ? 0 : 1];
};

