#!/usr/bin/nodejs
/*
     5! = 5 * 4 * 3 * 2 * 1 = 120;
*/

factorialRecursive = (number) => {
    if (number === 2) {
        return 2
    }

    return number * factorialRecursive(number - 1);
};

let answerR = factorialRecursive(5);
console.log(answerR);

//----------------------------------------------------------

factorialIterative = (number) => {
    let result = 1;
    if (number === 2) {
        return 2;
    }

    for (let x = 2; x <= number; x++) {
        result *= x;
    }
    return result;
};
let answerI = factorialIterative(5);
console.log(answerI);
