/**
 * Created by GOGO on 22.05.2017.
 */
function sumVat(input) {
    let sum = 0;
    for (let num of input) {
        sum += num;
    }
    let vat = sum * 0.20;
    let totalSum = sum + vat;
    console.log(sum);
    console.log(vat);
    console.log(totalSum);
}

//sumVat([1.20, 2.60, 3.50]);
