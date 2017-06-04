/**
 * Created by GOGO on 04.06.2017.
 */
function validationEmail(email) {
    "use strict";
    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    if (email.match(regex) !== null) {
        return 'Valid';
    }
    return 'Invalid';
}

console.log(validationEmail('Goran2222@abv.dd.2' ));