/**
 * Created by GOGO on 30.05.2017.
 */

function makeCrital(input) {
    "use strict";
    let size = input[0];
    let material = 0;

    let counterCut = 0;
    let counterLap = 0;
    let counterGrid = 0;
    let counterEtch = 0;
    let xrub = 0;


    for (let i = 1; i < input.length; i++) {
        material = input[i];
        console.log(`Processing chunk ${material} microns`);
        let end = '\nTransporting and washing';
        counterCut = 0;
        counterLap = 0;
        counterGrid = 0;
        counterEtch = 0;
        xrub = 0;

        if (material / 4 >= size) {
            material = cut(material);
            console.log(`Cut x${counterCut}` + end);
            if (material == size) {
                console.log(`Finished crystal ${material} microns`)
                continue;
            }
        }

        if (material - (material * 0.2) >= size) {
            material = lap(material);
            console.log(`Lap x${counterLap}` + end);
            if (material == size) {
                console.log(`Finished crystal ${material} microns`)
                continue;
            }
        }

        if (material - 20 >= size) {
            material = grid(material);
            console.log(`Grind x${counterGrid}` + end);
            if (material == size) {
                console.log(`Finished crystal ${material} microns`)
                continue;
            }
        }

        if (material - 2 >= size - 2) {
            material = etch(material);
            console.log(`Etch x${counterEtch}` + end);
            if (material == size) {
                console.log(`Finished crystal ${material} microns`)
                continue;
            }
        }

        if (material == size - 1) {
            material += 1;
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${material} microns`)
    }

    function etch(material) {
        while (material-2 >=size-1  ) {
            material -= 2;
            counterEtch++;
        }
        return material;
    }

    function grid(material) {
        while (material - 20 >= size) {
            material -= 20;
            counterGrid++;
        }
        return washing(material);
    }

    function cut(material) {
        while (material / 4 >= size) {
            material = material / 4;
            counterCut++
        }
        return washing(material);
    }

    function lap(material) {
        while (material - (material * 0.2) >= size) {
            material -= material * 0.2;
            counterLap++;
        }
        return washing(material);
    }


    function washing(material) {
        return Math.floor(material);
    }
}

makeCrital([1375, 50000]);
makeCrital([1000, 4000, 8100]);