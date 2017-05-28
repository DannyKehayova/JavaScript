/**
 * Created by GOGO on 28.05.2017.
 */

function isPalindrom(str) {
    for (let i=0; i<str.length; i++) {
        if (str[i] != str[str.length-1-i]){
            return false;
        }
        return true;
    }
}

console.log(isPalindrom('ahha'));