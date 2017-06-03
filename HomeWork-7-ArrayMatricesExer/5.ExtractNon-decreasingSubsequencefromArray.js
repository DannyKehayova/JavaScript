/**
 * Created by GOGO on 02.06.2017.
 */

function findSequence(input) {
    "use strict";
    let max = Number.MIN_SAFE_INTEGER;
    let arr=[];
    for (let i = 0; i<input.length; i++){
        if (input[i] >= max) {
            arr.push(input[i]);
            max = input[i];
        }
    }
    for (let e of arr){
        console.log(e);
    }
}

function filters(input) {
    console.log(input.filter((a) => a > a).join(' '));
}
findSequence([1, 2, 3, 10, 5, 13]);
filters([1, 2, 3, 10, 5, 13]);