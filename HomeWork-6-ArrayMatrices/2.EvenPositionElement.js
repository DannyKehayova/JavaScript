/**
 * Created by GOGO on 30.05.2017.
 */
function findEvenElement(input) {

    "use strict";
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result.push(input[i]);
        }
    }
    //  let newNumbers = (input) => input.filter((e, i)=> i % 2 == 0)//.join(" ");
    //  console.log(newNumbers(input));
    console.log(result.join(' '));
}

findEvenElement(['20', '30', '40']);