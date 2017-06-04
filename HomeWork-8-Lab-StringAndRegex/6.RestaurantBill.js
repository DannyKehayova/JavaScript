/**
 * Created by GOGO on 04.06.2017.
 */
function makeBill(input) {
    "use strict";
    let order = input.filter((e,i)=> i % 2 == 0);
    let sum = input.filter((e,i)=> i % 2 == 1).map(Number).reduce((a,b)=> a+b);
    console.log(`You purchased ${order.join(', ')} for a total sum of ${sum}`)
}

makeBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);