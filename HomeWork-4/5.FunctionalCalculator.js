/**
 * Created by GOGO on 28.05.2017.
 */
function calculate(a, b, op) {

    let calc = (a,b,op) => {return op(a,b)};
    let add = (a,b) => {return (a+b)};
    let divide = (a,b) => {return (a/b)};
    let substract = (a,b) => {return(a-b)};
    let multiply = (a,b) => {return(a*b)};
    if(op == '+') {
        return(calc(a,b, add));
    } else if (op == '/') {
        return (calc(a,b,divide));
    } else if (op == '-') {
        return(calc(a,b, substract));
    } else {
        return (calc(a,b, multiply));
    }

}

console.log(calculate(2, 4, '*'));