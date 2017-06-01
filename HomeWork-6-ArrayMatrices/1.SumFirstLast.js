/**
 * Created by GOGO on 30.05.2017.
 */
function calculateSum(input) {
    "use strict";
   input = input.map(Number);
   let sum = input[0] + input[input.length-1];
    console.log(sum);
}

calculateSum(['20', '30', '40']);