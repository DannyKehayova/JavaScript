/**
 * Created by GOGO on 28.05.2017.
 */
function printTriangle(n = 6) {
    function printStars(number) {
        console.log('*'.repeat(number));
    }
    for (let i=1; i<=n; i++) printStars(i)
    for (let i=n-1; i>=0; i--) printStars(i)

}

printTriangle();