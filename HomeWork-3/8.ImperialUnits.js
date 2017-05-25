/**
 * Created by GOGO on 25.05.2017.
 */
function convertToFeetAndIncees(n) {
    let feets = Math.floor(n / 12);
    let inches = Math.ceil(n % 12);
    return `${feets}'-${inches}"`;

}

console.log(convertToFeetAndIncees(11));;