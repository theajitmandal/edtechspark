// elements = [1, 2, 3, 4, 5]
// for(elements in elements){
//     console.log(elements);
// }
// const arr = [2, 4, 6, 8, 10]
// const newArr = arr.map((e) => e + 2 )
// const newArr1 = arr.filter((e) => e + 2 )
// console.log(newArr);
// console.log(newArr1);

const { randomBytes } = require("crypto");

// const array = [2, 4, 6, 8]
// const array1 = [2, 4, 6, 8, 10, 12, 14, 16]
// const array3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 24]
// const array4 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 24, 26]
// array.pop();
// array.push();
// array.unshift();
// console.log(`The new array is ${array}`);
// console.log(`The original array is ${array1}`);
// console.log(`The original array is ${array2}`);
// console.log(`The original array is ${array3}`);
// console.log(`The original array is ${array4}`);
// console.log(`The original array is ${array5}`);
// console.log(`The original array is ${array6}`);
// console.log(`The original array is ${array7}`);
// console.log(array);


const fruits = ["Apple", "Orange", "Apple", "Mango"];
const fruits1SS = ["Apple", "Orange", "Apple", "Mango", "app"];
let position = fruits.indexOf("Apple") + 1;
console.log([position]);
console.log(fruits);
let x = 100 + 50;
let y = 100 + 150;

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
let index1 = text.indexOf("loc", 15);
let index12 = text.indexOf("occ", 15);
console.log(index);
console.log(text);
console.log(index1);
console.log(postiion + text);
console.log(postiion + index);
console.log(postiion + index);
console.log(index1 + index12);
console.log(index1 + index12);
console.log(index1 + index12 + index12);

console.log(require(randomBytes));

require('crypto').randomBytes(64).toString('hex')
console.log(require('crypto').randomBytes(64).toString('hex'));
console.log(new Date().getDay());


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }




