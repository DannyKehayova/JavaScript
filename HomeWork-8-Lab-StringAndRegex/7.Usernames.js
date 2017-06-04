/**
 * Created by GOGO on 04.06.2017.
 */
function createUsername(input) {
    "use strict";
    let userNameArr = [];
    for (let i = 0; i < input.length; i++) {
        let userArr = input[i].split('@');
        let second = userArr[1].split('.').map(x => x[0]).join('');
        let userName = userArr[0] + '.' + second;
        userNameArr.push(userName);
    }
    console.log(userNameArr.join(', '));;

}

createUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);