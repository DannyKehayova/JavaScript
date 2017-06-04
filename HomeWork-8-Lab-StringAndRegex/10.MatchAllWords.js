/**
 * Created by GOGO on 04.06.2017.
 */
function matchTheWords(input){
    "use strict";
    let regex = /\b\w+\b/g;
    console.log(input.match(regex).join('|'));
}

matchTheWords('_(Underscores) are also word characters');