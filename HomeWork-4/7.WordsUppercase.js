/**
 * Created by GOGO on 28.05.2017.
 */
function wordToUpper(text){
    let strToUper = text.toUpperCase();
    let words = extractWords();
    words = words.filter(x => x != '');

    console.log(words.join(', '));

    function extractWords() {
        return strToUper.split(/\W+/);
    }
}

wordToUpper('Hi, how are you?');