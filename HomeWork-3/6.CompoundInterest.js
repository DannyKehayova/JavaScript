/**
 * Created by GOGO on 25.05.2017.
 */

function calculateInterest(input) {
    let sum = input[0];
    let interestRate = input[1];
    let months = 12/input[2];
    let timespan = input[3];

    let f = sum * (Math.pow(1 + (interestRate/100)/months, months*timespan));
    console.log(f.toFixed(2));
}

calculateInterest([1500, 4.3, 3, 6]);