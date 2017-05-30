/**
 * Write a JS program that modifies a number until the average value of all of its digits is higher than 5. In order to modify the number, your program should append a 9 to the end of the number, when the average value of all of its digits is higher than 5 the program should stop appending. If the number’s average value of all of its digits is already higher than 5, no appending should be done.
 The input is a single number.
 The output should consist of a single number - the final modified number which has an average value of all of its digits higher than 5. The output should be printed on the console.
 Constraints
 •    The input number will consist of no more than 6 digits.
 •    The input will be a valid number (there will be no leading zeroes).

 */

function checkTheNumber(number) {

    console.log(call());

    function call() {
        while (isAverage5(number) <= 5) {
            number += '9';
        }
        return number;
    }

    function isAverage5(number) {
        numberLength = number.length;
        number = Number(number);
        let sum = 0;
        let sumAvg = 0;

        while (number > 0) {
            sum += number % 10;
            number /= 10;
            number = Math.floor(number);
        }

        return sum / numberLength;

    }
}

checkTheNumber(5858);