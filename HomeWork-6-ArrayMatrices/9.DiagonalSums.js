function calcDiagonalSum(matrix) {
    "use strict";
    let sumLeft = 0;
    let sumRight= 0;
    for (let row = 0; row < matrix.length; row++) {
        sumLeft += matrix[row][row];
       sumRight += matrix[row][matrix[row].length -1 - row];
    }
    console.log(sumLeft + ' ' + sumRight);
}

calcDiagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);