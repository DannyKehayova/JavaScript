/**
 * Created by GOGO on 04.06.2017.
 */

function drawDashbord(input) {
    "use strict";
    let matrix = [];
     let matrixRow = input[0];
    let matrixCol= input[1];
    let x = input[2];
    let y = input[3];
     for (let row = 0; row < matrixRow; row++) {
         matrix[row] = [];
         for (let col = 0; col < matrixCol; col++) {
             matrix[row][col]=0;
         }
     }

     matrix[x][y] = 1;

    for (let row = 0; row < matrixRow; row++) {
        for (let col = 0; col < matrixCol; col++) {
            if (row == x && col == y) {
                continue;
            }
            matrix[row][col] = (Math.max(Math.abs((row - x)), Math.abs(col - y))) + 1;

        }

    }
    matrix.forEach((e)=> console.log(e.join(' ')));

}

drawDashbord([3, 3, 2, 2]);