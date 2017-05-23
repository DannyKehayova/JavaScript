/**
 * Created by GOGO on 23.05.2017.
 */
function drowChessBord(n) {
    let chessBord = '<div class="chessboard">\n';
    let color = 'black';
    for (let i = 0; i < n; i++) {
        chessBord += '  <div>\n';
        for (let j = 0; j < n; j++) {
            chessBord += `    <span class="${color}"></span>\n`;
            if (n % 2 == 0 && j == n - 1) {
                continue;
            }
            if (color == 'white') {
                color = 'black';
            } else {
                color = 'white';
            }
        }
        chessBord += '  </div>\n';
    }
    chessBord += '</div>';
    return chessBord;
}

console.log(drowChessBord(4));