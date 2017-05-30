/**
 * Created by GOGO on 30.05.2017.
 */
function createdDNA(n) {
    let counter = 0;
    let starCounter = 2;
    let counterStarBool = true;
    let counterBool = true;
    let counterLetter = 0;

    let arr = ['A', 'T', 'C', 'G','T', 'T', 'A', 'G', 'G', 'G'];

    for (let i = 0; i < n; i++) {

        console.log('*'.repeat(starCounter) + `${arr[counterLetter]}` + '-'.repeat(counter) + `${arr[counterLetter+1]}` + '*'.repeat(starCounter));

        if(counterStarBool) {
            starCounter--;
        } else {
            starCounter++;
        }
        if(counterBool) {
            counter += 2;
        } else {
            counter -= 2;
        }

        checkStarCounter(starCounter);
        checkCounter(counter);

        counterLetter+=2;
        if (counterLetter == 10) {
            counterLetter = 0;
        }
    }

    function checkStarCounter(starCounter) {
        if (starCounter == 0) {
            counterStarBool= false;
        }
        if (starCounter == 2) {
            counterStarBool = true;
        }
    }

    function checkCounter(counter) {
        if(counter == 4) {
            counterBool = false;
        }
        if (counter == 0 ) {
            counterBool = true;
        }
    }
}

createdDNA(10);