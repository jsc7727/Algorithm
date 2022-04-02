var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString();
var input = fs.readFileSync("./test.text").toString();

function encryption(plaintext) {
    const originalNumber = plaintext.length;
    let r = 1;
    let c = originalNumber;
    for (let i = 2; i <= Math.sqrt(originalNumber); i++) {
        if (originalNumber % i === 0) {
            r = i;
            c = originalNumber / r;
        }
    }
    const chars = plaintext.split("");
    const matrix = getMatrix(chars, r);
    let res = readVertically(matrix, r, c);
    // console.log(res)
    return res.join("");
}

function getFactors(number) {
    const s = Math.sqrt(number);
    let factors = [[1, number]];

    for (let i = 2; i <= s; i++) {
        if (number % i == 0) {
            factors.push([i, number / i]);
        }
    }

    return factors;
}

function getMatrix(input, column) {
    let matrix = [];
    let buffer = [];
    for (el of input) {
        buffer.push(el);
        if (buffer.length == column) {
            matrix.push(buffer);
            buffer = [];
        }
    }
    return matrix;
}

function readVertically(matrix, row, column) {
    let result = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            result.push(matrix[j][i]);
        }
    }
    return result;
}

console.log(encryption(input));




const newEncryption = (str) => {
    const arr = str.split('');
    const len = arr.length;
    let N = 1;
    let M = len;
    for (let i = 0; i <= Math.sqrt(len); i++) {
        if (len % i === 0) {
            N = i;
            M = len / N;
            // console.log(N, M)
        }
    }
    // console.log(N, M)
    const newArray = [];
    for (let i = 0; i < M; i++) {
        newArray.push(arr.splice(0, N));
    }
    // console.log(newArray)
    let answer = "";
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            answer += newArray[j][i];
        }
    }
    return answer;
}

// const test = () => {
//     let str = "";
//     console.log(encryption('') !== newEncryption(''))
//     for (let i = 0; i < 1000; i++) {
//         str += i;
//         if (encryption(str) !== newEncryption(str)) {
//             console.log("&&&&")
//         }
//     }
// }
// test();