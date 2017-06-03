/**
 * Created by GOGO on 04.06.2017.
 */

function drawDashbord(input) {
    "use strict";
    let [matrixRow, matrixCol, x, y] = input;
    let matrix = [];

    for (let row = 0; row < matrixRow; row++) {
        matrix.push('0'.repeat(matrixCol).split('').map(Number));
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

drawDashbord([6, 5, 2, 2]);