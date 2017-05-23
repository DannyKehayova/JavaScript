/**
 * Created by GOGO on 23.05.2017.
 */
function checkIsPrime(n) {
    if (n < 2) return 'false';
    let number = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= number; i++) {
        if (n % i == 0) {
            return 'false';
        }
    }
    return 'true';
}
