/**
 * Created by GOGO on 23.05.2017.
 */
function checkNumber(number) {
    if (number % 1 != 0) {
        return 'invalid';
    } else if (number % 2 == 0) {
        return 'even';
    }
    return 'odd';
}

console.log(checkNumber(9));