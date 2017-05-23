/**
 * Created by GOGO on 23.05.2017.
 */
function checkFood(food) {
   let fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetable = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];
   if(fruit.includes(food)) {
       return 'fruit';
   } else if (vegetable.includes(food)) {
       return 'vegetable'
   }
   return 'unknown';
}

console.log(checkFood('tomato'));