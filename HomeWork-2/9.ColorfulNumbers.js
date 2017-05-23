/**
 * Created by GOGO on 23.05.2017.
 */
function makeColorFullNumber(n) {
    let output = '<ul>\n';
    for (let i=1; i<=n; i++){
        if (i % 2 == 0) {
            output += `<li><span style='color:blue'>${i}</span></li>` + '\n';
            continue;
        }
        output += `<li><span style='color:green'>${i}</span></li>` + '\n';
    }
    output += '</ul>';
    return output;
}

console.log(makeColorFullNumber(10));