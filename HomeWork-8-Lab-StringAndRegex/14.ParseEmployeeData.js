/**
 * Created by GOGO on 04.06.2017.
 */
function solve(input) {
    "use strict";
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9\- ]+)$/;

    for (let info of input) {
        let match = regex.exec(info);
        if (match) {
            console.log('Name: ' + match[1]);
            console.log('Position: ' + match[3]);
            console.log('Salary: ' + match[2]);
        }
    }
}

solve(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
);