/**
 * Created by GOGO on 23.05.2017.
 */
function calculateArea(a, b, c) {
    let p = (a+b+c)/2;
    let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return S;
}

console.log(calculateArea(2,3.5, 4));