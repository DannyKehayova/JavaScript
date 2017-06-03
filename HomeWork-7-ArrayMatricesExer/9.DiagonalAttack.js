/**
 * Created by GOGO on 04.06.2017.
 */

function diagonalAttack(input) {
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].split(' ').map(Number);
    }
    let lefSum = 0;
    let rightSum = 0;
    for (let row = 0; row < input.length; row++) {
        lefSum += input[row][row];
        rightSum += input[row][input[row].length-1-row];
    }
    if (rightSum == lefSum) {
        for (let row = 0; row < input.length; row++) {
            for (let col = 0; col < input[row].length; col++) {
                if ((row == row && col == row) || (row == row && col== input[row].length-1-row)) {
                    continue;
                } else {
                    input[row][col] = rightSum;
                }
            }
        }
    }
    input.forEach((e)=> console.log(e.join(' ')));
}


diagonalAttack(['5 3 12 3 10',
                '11 4 23 2 5',
                '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);