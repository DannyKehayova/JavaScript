/**
 * Created by GOGO on 02.06.2017.
 */
function printArray(input) {
   let delimiter = input.pop();
    console.log(input.join(delimiter));
}

printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']);
