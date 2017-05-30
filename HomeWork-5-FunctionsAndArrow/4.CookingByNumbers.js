/**
 * Created by GOGO on 30.05.2017.
 */
function cookNumbers(input) {
    let number = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        number = cooking(number, input[i]);
        console.log(number);
    }
    function cooking(number, command) {
        switch (command) {
            case 'chop' :
                return number /= 2;
            case 'dice' :
                return number = Math.sqrt(number);
            case 'spice' :
                return ++number;
            case 'bake' :
                return number *= 3;
            case 'fillet' :
                return numbar = number - (number * 0.2);
        }
    }
}


cookNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);