/**
 * Created by GOGO on 23.05.2017.
 */
function calculateArea(r) {
    let result = '';
    let area = Math.PI * Math.pow(r, 2);
    result = area + '\r\n' + area.toFixed(2);
    return result;
}

console.log(calculateArea(5));