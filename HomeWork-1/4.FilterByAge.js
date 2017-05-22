/**
 * Created by GOGO on 22.05.2017.
 */
function filterByAge(limitAge, firstName, firstAge, secondName, secondAge) {
    if(limitAge <= firstAge) {
      console.log(`{ name: '${firstName}', age: ${firstAge} }`);
    }
    if(limitAge <= secondAge) {
        console.log(`{ name: '${secondName}', age: ${secondAge} }`);
    }

}

//filterByAge(19, 'Ivan', 119, 'Asen', 20);