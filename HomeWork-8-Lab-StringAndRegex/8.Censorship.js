/**
 * Created by GOGO on 04.06.2017.
 */

function censure(text, arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let censureStr = '-'.repeat(str.length);

        let startIndex = text.indexOf(str);
        while (startIndex > -1) {
            text = text.replace(str, censureStr);
            startIndex = text.indexOf(str, startIndex + 1);
        }
    }

    console.log(text);
}

censure('goran, ivan sgoran goran goran', ['goran']);