/**
 * Created by GOGO on 22.05.2017.
 */

function nextDay(year, month, day){
    "use strict";
    let date = new Date(year, month-1, day);
    let oneDay =  24 * 60 * 60 * 1000;
    let nexDate = new Date(date.getTime()+oneDay);
    console.log(nexDate.getFullYear() + '-' + (nexDate.getMonth()) + '-' + nexDate.getDate());
}

nextDay(2017, 5, 31);