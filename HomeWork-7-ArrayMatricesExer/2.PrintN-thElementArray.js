/**
 * Created by GOGO on 02.06.2017.
 */
function printNElement(input) {
    "use strict";
    let step = Number(input.pop());
     let arr = input.filter((x,i)=> i % step == 0);

    for (let element of arr) {
        console.log(element);
    }

}

printNElement([1,2,3,4,5,6]);