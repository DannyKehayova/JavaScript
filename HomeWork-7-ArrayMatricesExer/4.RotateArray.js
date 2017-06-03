/**
 * Created by GOGO on 02.06.2017.
 */

function rotate(input) {
    "use strict";
    let rotateStep = input.pop();

    if (rotateStep > input.length) {
        let realNum = Math.floor(rotateStep / input.length);
        rotateStep = rotateStep - (realNum * 4);
    }

    let rotateArr = input.splice(input.length-rotateStep);

    console.log(rotateArr.concat(input).join(' '));
}

rotate(['1', '2', '3', '4', 15]);