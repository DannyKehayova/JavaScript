/**
 * Created by GOGO on 24.05.2017.
 */

function calculateAreaAndPerimeter (a,b) {
    let result = '';
    let area = Math.round((a * b) * 100)/100;
    let perimeter = Math.round((2*(a + b)) * 100)/100;
    return result = area + '\n' + perimeter;
}

console.log(calculateAreaAndPerimeter(2, 2));