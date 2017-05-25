/**
 * Created by GOGO on 25.05.2017.
 */

function checkTheMovePrice(input) {
    let newS = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    let film = [];
    film['the godfather'] = [];
    film['the godfather']['monday'] = 12;
    film['the godfather']['tuesday'] = 10;
    film['the godfather']['wednesday'] = 15;
    film['the godfather']['thursday'] = 12.5;
    film['the godfather']['friday'] = 15;
    film['the godfather']['saturday'] = 25;
    film['the godfather']['sunday'] = 30;
    film['schindler\'s list']=[];
    film['schindler\'s list']['monday'] = 8.50;
    film['schindler\'s list']['tuesday'] = 8.50;
    film['schindler\'s list']['wednesday'] = 8.50;
    film['schindler\'s list']['thursday'] = 8.50;
    film['schindler\'s list']['friday'] = 8.50;
    film['schindler\'s list']['saturday'] = 15;
    film['schindler\'s list']['sunday'] = 15;
    film['casablanca']=[];
    film['casablanca']['monday'] = 8;
    film['casablanca']['tuesday'] = 8;
    film['casablanca']['wednesday'] = 8;
    film['casablanca']['thursday'] = 8;
    film['casablanca']['friday'] = 8;
    film['casablanca']['saturday'] = 10;
    film['casablanca']['sunday'] = 10;
    film['the wizard of oz']=[];
    film['the wizard of oz']['monday'] = 10;
    film['the wizard of oz']['tuesday'] = 10;
    film['the wizard of oz']['wednesday'] = 10;
    film['the wizard of oz']['thursday'] = 10;
    film['the wizard of oz']['friday'] = 10;
    film['the wizard of oz']['saturday'] = 15;
    film['the wizard of oz']['sunday'] = 15;

    console.log(film[newS][day]);
}

checkTheMovePrice(['casablanca', 'Friday']);