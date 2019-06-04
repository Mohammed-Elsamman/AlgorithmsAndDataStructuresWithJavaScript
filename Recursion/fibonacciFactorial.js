#!/usr/bin/nodejs
/*
     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....
     0+1=1 ->1+1=2 ->2+1=3 ->3+2=5 ->5+3=8 ->...
*/

fibonacciRecursive = (n) => {
    if (n < 2) {
        return n
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

let answerR = fibonacciRecursive(40);
// so slow to get the answer O(2^n)
console.log(answerR);


fibonacciIterative = (n) => {
    let arrFib = [0,1];
    if (n < 2) {
        return 2;
    }

    for (let x = 2; x < n + 1; x++) {
        arrFib.push(arrFib[x-1]+arrFib[x-2])
    }
    return arrFib[n];
};

let answerI = fibonacciIterative(40);

console.log(answerI);
