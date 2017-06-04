/**
 * Created by GOGO on 04.06.2017.
 */
function fillFrom(name, email, phone, textArr) {
    "use strict";

    for (let info of textArr) {
        info = info.replace(/<![A-Za-z]+!>/g, name);
        info = info.replace(/<\+[A-Za-z]+\+>/g, phone);
        info = info.replace(/<@[A-Za-z]+@>/g, email);
        console.log(info);
    }
}

fillFrom('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)