/**
 * Created by GOGO on 25.05.2017.
 */
function creatProparty(input) {
    let valueName = input[0];
    let personName = input[1];
    let valueAge = input[2];
    let personAge = input[3];
    let valueGender = input[4];
    let personGender = input[5];
    let string = {};
    string[valueName] = personName;
    string[valueAge] = personAge;
    string[valueGender] = personGender;
    return string;

}

console.log(creatProparty(['name', 'Pesho', 'age', '23', 'gender', 'male']));