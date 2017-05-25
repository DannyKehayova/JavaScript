function gradsToDegree(grads) {
    let degree = 0.9 * Number(grads);
    if (Number(grads) <= 0) {
        degree = 360 + (degree % 360);
    }
    return degree;
}

console.log(gradsToDegree(-100));
