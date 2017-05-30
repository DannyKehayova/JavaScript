/**
 * Created by GOGO on 30.05.2017.
 */

function checkDistance(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];


    if (distance(x1, 0, y1, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (distance(0, x2, 0, y2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (distance(x1, x2, y1, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function distance(x1, x2, y1, y2) {
        let dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow(y2 - y1, 2));

        if (Math.round(dist) == dist) {
            return true;
        }
        return false
    }
}

checkDistance([3, 0, 0, 4]);