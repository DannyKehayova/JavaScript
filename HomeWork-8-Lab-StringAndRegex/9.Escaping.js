/**
 * Created by GOGO on 04.06.2017.
 */
function escaping(input) {
    "use strict";
    let arrHtml = ['&', '<', '>', '"'];
    let arrEscape = ['&amp;', '&lt;', '&gt;', '&quot;'];
    let result = '<ul>\n';
    for (let j=0; j<input.length; j++) {
        result += '  <li>';
        for (let i = 0; i < arrHtml.length; i++) {
            let startIndex = input[j].indexOf(arrHtml[i]);
            if (startIndex != -1) {
                while (startIndex > -1) {
                    input[j] = input[j].replace(arrHtml[i], arrEscape[i]);
                    startIndex = input[j].indexOf(arrHtml[i], startIndex +1);
                }
            }
        }
        result += input[j]+'</li>\n';
    }
    result += '</ul>';

    console.log(result);
}

escaping(['<b>unescaped text</b>', 'normal text']);