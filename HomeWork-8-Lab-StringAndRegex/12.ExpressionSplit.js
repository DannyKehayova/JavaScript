/**
 * Created by GOGO on 04.06.2017.
 */
function split(code) {
    code.split(/[\s(),;\.]/).filter(e=> e != "").forEach(e => console.log(e));
}

split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');