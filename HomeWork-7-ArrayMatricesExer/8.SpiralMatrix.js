/**
 * Created by GOGO on 03.06.2017.
 */
function generateSpiralMatrix(row, col) {
    let matrix = [];
    let counter = 0;
    let destination = 'right';

    for (let matrixRow = 0; matrixRow < row; matrixRow++) {
        let rowToPush = [];
        {
            for (let matrixCol = 0; matrixCol < col; matrixCol++) {
                rowToPush.push(0);
            }
        }
        matrix.push(rowToPush);
    }
    let counterTopRow = 0;
    let counterBottomRow = row -1 ;
    let counterColLeft = 0;
    let counterColRight = col -1 ;
    while (counter < row*col) {

        if (destination == 'right') {

            for (let matrixCol = counterColLeft; matrixCol <= counterColRight; matrixCol++) {
                counter++;
                matrix[counterTopRow][matrixCol] = counter;
            }
            counterTopRow++;
            destination = 'down';
        }


        if (destination == 'down') {

            for (let rightRow = counterTopRow; rightRow <= counterBottomRow; rightRow++) {
                counter++;
                matrix[rightRow][counterColRight] = counter;

            }
            counterColRight--;
            destination = 'left'
        }

        if (destination == 'left') {

            for (let leftCol = counterColRight; leftCol >= counterColLeft; leftCol--) {
                counter++;
                matrix[counterBottomRow][leftCol] = counter;
            }
            counterBottomRow--;
            destination = 'top';
        }
        if (destination == 'top') {

            for (let topRow = counterBottomRow; topRow >= counterTopRow; topRow--) {
                counter++;
                matrix[topRow][counterColLeft] = counter;
            }
            counterColLeft++;
            destination = 'right';

        }
    }

    matrix.forEach((e)=> console.log(e.join(' ')) );

}

generateSpiralMatrix(8,8);

