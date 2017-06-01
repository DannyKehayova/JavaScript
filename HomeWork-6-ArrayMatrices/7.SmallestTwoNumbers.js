/**
 * Created by GOGO on 01.06.2017.
 */
function findSmallestToNumbers(input) {
    let result = input.sort((a, b)=>a - b).slice(0,2);
    for( let element of result ) {
        console.log(element);
    }
}

findSmallestToNumbers([30, 15, 50, 5]);