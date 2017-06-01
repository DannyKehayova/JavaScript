/**
 * Created by GOGO on 30.05.2017.
 */
function findFirstAndLast(input) {
    "use strict";
    let k = input.shift();
    let first = [];
    let second = [];
   for (let i=0; i<input.length; i++) {
       if(i < k ) {
           first.push(input[i]);
       }
       if (i >= input.length-k){
           second.push(input[i]);
       }
   }

    console.log(first.join(' '));
    console.log(second.join(' '));
}


findFirstAndLast([2, 7, 8, 9]);