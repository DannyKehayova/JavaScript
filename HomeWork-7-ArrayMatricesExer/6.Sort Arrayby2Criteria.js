/**
 * Created by GOGO on 02.06.2017.
 */
function sortArray(input) {
    console.log(input.sort(compare).join('\n'));
    function compare(a, b) {
       "use strict";
       if (a.length < b.length) {
           return -1; // Казваме кое да върне. -1 е преди знака, 1 е след знака 0 значи са равни
                    // Условието ни е първо по дължина след това по азбучен ред.
       } else if (a.length > b.length) {
           return 1;
       } else {
           if (a < b) {
               return -1;
           } else if (a > b) {
               return 1;
           }
           else {
               return 0;
           }
       }

   }
}

sortArray(['alpha', 'beta', 'anna', 'gamma']);