/**
 * Created by GOGO on 28.05.2017.
 */
function drowRectangle(n = 5) {
    function printStars(numberOfStars) {
        console.log('* '.repeat(numberOfStars));
    }
    for (let i = 1; i <= n; i++) {
        printStars(n);
    }
}

drowRectangle(3);