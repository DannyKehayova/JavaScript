/**
 * Created by GOGO on 23.05.2017.
 */
function findAreaAndVolume(r, h) {
    let result = '';
    let volume = (Math.PI * Math.pow(r,2)*h)/3;
    let area = Math.PI * r * (Math.sqrt(Math.pow(r,2)+Math.pow(h,2))) + (Math.PI * Math.pow(r, 2));
   return result = volume.toFixed(4) + '\n' + area.toFixed(4);
}

console.log(findAreaAndVolume(3,5));