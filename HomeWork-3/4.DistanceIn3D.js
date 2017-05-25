/**
 * Created by GOGO on 24.05.2017.
 */

function calculateDistance(input) {
    let x1 = input[0];
    let y1 = input[1];
    let z1 = input[2];
    let x2 = input[3];
    let y2 = input[4];
    let z2 = input[5];

    let distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2) + Math.pow((z2-z1),2));
    return distance;

}

console.log(calculateDistance([3.5, 0, 1, 0, 2, -1]));