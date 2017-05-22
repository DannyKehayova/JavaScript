/**
 * Created by GOGO on 22.05.2017.
 */
function calculatesArea( w, h, W, H) {
    let s1 = W*H;
    let s2 = w*h;
    let s3 = Math.min(h,H) * Math.min(W,w);
    let area = s1+s2-s3;
    return area;
}

//console.log(calculatesArea(13, 2, 5, 8));