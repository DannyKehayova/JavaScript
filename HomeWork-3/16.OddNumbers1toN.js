/**
 * Created by GOGO on 25.05.2017.
 */
function printOddNumbers(n) {
    let numbers = '';
    for (let i = 0; i<= n; i++) {
        if(i % 2 != 0) {
            numbers += `${i}\n`;
        }
    }
    return numbers;
}

console.log(printOddNumbers(4));
