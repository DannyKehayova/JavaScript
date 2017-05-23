/**
 * Created by GOGO on 23.05.2017.
 */

function checkLeapYear(year) {
    if((year % 4 == 0 && year % 100 != 0) ||(year % 400 == 0) )  {
        return 'yes';
    }
        return 'no';
}

console.log(checkLeapYear(2016));
