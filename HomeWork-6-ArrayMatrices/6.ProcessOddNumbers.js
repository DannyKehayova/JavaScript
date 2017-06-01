/**
 * Created by GOGO on 01.06.2017.
 */
function oddIndexNumbers(input) {
    "use strict";
    console.log(input.filter((e, i)=> i % 2 != 0).map((x)=> x*2).reverse().join(' '));
}

oddIndexNumbers([10, 15, 20, 25]);