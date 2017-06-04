/**
 * Created by GOGO on 04.06.2017.
 */
function extractText(text) {
    "use strict";
    let result = [];
    let startIndex = text.indexOf('(');
    let endIndex = text.indexOf(')');

    while (startIndex >-1 && endIndex > - 1) {
        if (endIndex > startIndex) {
            let str = text.substring(startIndex + 1, endIndex);
            result.push(str);
        }
        startIndex = text.indexOf('(', endIndex+1);
        endIndex = text.indexOf(')', endIndex+1);
    }

    console.log(result.join(', '));
}

extractText('Rakiya) (Bulgarian brandy) is self-made liquor (alcoholic drink)');
