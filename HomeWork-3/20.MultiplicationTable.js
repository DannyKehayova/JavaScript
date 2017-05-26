/**
 * Created by GOGO on 25.05.2017.
 */
function createTable(n) {
    let result = '<table border="1">\n';
    for (let i = 0; i <= n; i++) {
        result += '<tr>';
        let sum ='';
        if (i != 0) {
             result += `<th>${i}</th>`;
        } else {
            result += `<th>x</th>`;
        }
        for(let j = 1; j <= n; j++){
            if(i == 0) {
                result += `<th>${j}</th>`;
            } else {
                let multi = i * j;
                result += `<td>${multi}</td>`;
            }
        }
        result += '</tr>\n';
    }
    result += '</table>';
    console.log(result);
}

//createTable(5);