/**
 * Created by GOGO on 02.06.2017.
 */

function slove(input) {
    "use strict";
    let arr = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] == 'add') {

            arr.push(i+1);
        } else {
             arr.pop()
        }
    }
    if (arr.length == 0) {
        console.log('Empty');
    }

    for (let index of arr) {
        console.log(index);
    }

}

slove(['remove']);