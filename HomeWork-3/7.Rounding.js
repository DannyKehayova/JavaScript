/**
 * Created by GOGO on 25.05.2017.
 */

function rounding([number, n]) {

    let denominator = Math.pow(10,n);
    let second = Math.round(number*denominator)/denominator;
    console.log(second);

}

rounding([15.333, 3]);