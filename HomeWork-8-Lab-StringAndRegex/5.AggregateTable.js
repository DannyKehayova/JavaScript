/**
 * Created by GOGO on 04.06.2017.
 */

function printBill(input) {
    let cityArr = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
       cityArr.push(input[i].split('|').filter(e => e != '').map(x => x.trim()).filter((e,i)=> i % 2 == 0));
        sum += (input[i].split('|')
            .filter(e => e != '')
            .map(x => x.trim())
            .filter((e,i)=> i % 2 == 1)
            .map(Number)
            .reduce((a,b)=>a +b));
    }

    console.log(cityArr.join(', '));
    console.log(sum);
}

printBill(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);