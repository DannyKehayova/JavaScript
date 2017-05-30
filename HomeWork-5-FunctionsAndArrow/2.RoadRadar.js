/**
 * Created by GOGO on 30.05.2017.
 */
function checkTheSpeed(input) {

    let speed = Number(input[0]);
    let areaLimit = getLimit(String(input[1]));
    console.log(breakingLowSpeed(speed, areaLimit));


    function getLimit(area) {
        switch (area) {
            case 'motorway' : return 130;
            case 'interstate' : return 90;
            case 'residential' : return 20;
            case 'city': return 50;
        }
    }

    function breakingLowSpeed(speed, areaLimit) {
        let overSpeed =  speed - areaLimit;

        if (overSpeed <= 0 ) {
            return '';
        } else {
            if(overSpeed <= 20){
                return 'speeding';
                }
             else if (overSpeed <= 40) {
                return 'excessive speeding';
             } else {
                return 'reckless driving';
            }
        }
        }

}

checkTheSpeed([200, 'motorway']);