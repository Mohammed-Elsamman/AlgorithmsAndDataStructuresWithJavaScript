#!/usr/bin/nodejs
/*
     5! = 5 * 4 * 3 * 2 * 1 = 120;
*/

findFactorialRecursive = (number) => {
    if (number === 2) {
        return 2
    }

    return number * findFactorialRecursive(number - 1);
};

let answerR = findFactorialRecursive(5);
console.log(answerR);


findFactorialIterative = (number) => {
    let result = 1;
    if (number === 2) {
        return 2;
    }

    for (let x = 2; x <= number; x++) {
        result *= x;
    }
    return result;
};

let answerI = findFactorialIterative(5);

console.log(answerI);
