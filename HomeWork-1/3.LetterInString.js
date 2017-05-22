/**
 * Created by GOGO on 22.05.2017.
 */
function occurrencesLetter(word, letter) {
    let counter = 0;
    for (let i=0; i< word.length; i++) {
        if (word[i] == letter) {
            counter++;
        }
    }
    console.log(counter);
}

//occurrencesLetter('panther', 'n');
