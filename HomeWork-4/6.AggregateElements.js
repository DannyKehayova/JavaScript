/**
 * Created by GOGO on 28.05.2017.
 */
function aggregateElements(elements) {

    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b);
    aggregate(elements, '', (a, b)=>a + b);

    function aggregate(arr, intavl, func) {
        let val = intavl;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);

        }
        console.log(val);
    }
}

aggregateElements([1, 2, 3]);
