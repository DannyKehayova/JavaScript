/**
 * Created by GOGO on 30.05.2017.
 */

function findNegativAndPositivNumbers(input) {
    "use strict";
    let nums = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            nums.unshift(input[i]); //first element add
        } else {
            nums.push(input[i]); // add last element
        }
    }
    let result = nums.join(' ');
    console.log(result);
}

findNegativAndPositivNumbers([1, -5, 3, 5, -2, 0, -1, -10]);
