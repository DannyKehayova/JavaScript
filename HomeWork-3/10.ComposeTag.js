/**
 * Created by GOGO on 25.05.2017.
 */
function compresTag([img, alt]) {
    return `<img src="${img}" alt="${alt}">`;
}

console.log(compresTag(['smiley.gif', 'Smiley Face']));