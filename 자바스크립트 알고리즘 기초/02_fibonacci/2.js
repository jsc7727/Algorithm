// function fibonacci(n) {
//   if(n === 0) return 0;
//   if(n === 1) return 1;
//   const lst = [0,1];
//   for(let i = 1; i < n; i++){
//     lst.push(lst[i]+lst[i-1])
//   }
//   return lst[lst.length-1];
// }
function fibonacci(n) {
    return recursive(n, [0, 1])
}
function recursive(n, lst) {
    if (n === 0) return 0;
    if (n === 1) return lst[lst.length - 1];
    lst.push(lst[lst.length - 2] + lst[lst.length - 1])
    return recursive(n - 1, lst);
}

let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34