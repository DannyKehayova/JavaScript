/**
 * Created by GOGO on 01.06.2017.
 */
function findEquaNeighobrs(matrix) {
    "use strict";
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0 ; col < matrix[row].length; col++) {
            if (row == matrix.length-1) {
                if(matrix[row][col] == matrix[row][col+1]) {
                    counter++;
                }
            } else {
                if (matrix[row][col] == matrix[row][col + 1] || matrix[row][col] == matrix[row + 1][col]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

findEquaNeighobrs(
    [['1', 'yes', '2', '3'],
        ['1', '4', 'yo', '3'],
        ['1', '4', 'yet', '3']]

);