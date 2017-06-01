/**
 * Created by GOGO on 01.06.2017.
 */
function findBiggest(matrix) {
    "use strict";
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let newNumber = matrix[row][col];
            if(maxNumber < newNumber) {
                maxNumber = newNumber;
            }
        }
    }
    console.log(maxNumber);
}

function funcBiggest(matrix) {
    let biggestNum1 = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum1 = Math.max(biggestNum1, c)));
    console.log(biggestNum1);
}


biggestElement([[20, 50, 10], [8, 33, 145]]);
findBiggest([[20, 50, 10], [8, 33, 145]]);
funcBiggest([[20, 50, 10], [8, 33, 145]]);