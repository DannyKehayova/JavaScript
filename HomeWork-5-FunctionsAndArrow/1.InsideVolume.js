/**
 * Created by GOGO on 30.05.2017.
 */

function determinesPoint(input){
    "use strict";

    let x1 = 10,  x2 = 50;
    let y1 = 20,  y2 = 80;
    let z1 = 15,  z2 = 50;

    for (let i=0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];

        if(inVolume(x, y, z)){
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function inVolume(x, y, z) {
        if(x >= x1 && x <=x2){
            if(y >= y1 && y <=y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }
    }

}



determinesPoint([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);