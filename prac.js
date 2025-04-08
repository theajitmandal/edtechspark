elements = [1, 2, 3, 4, 5]
for(elements in elements){
    console.log(elements);
}
const arr = [2, 4, 6, 8, 10]
const newArr = arr.map((e) => e + 2 )
const newArr1 = arr.filter((e) => e + 2 )
console.log(newArr);
console.log(newArr1);

const array = [2, 4, 6, 8]
const array1 = [2, 4, 6, 8, 10, 12, 14, 16]
const array3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 24]
const array4 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 24, 26]
array.pop();
array.push();
array.unshift();
console.log(`The new array is ${array}`);
console.log(`The original array is ${array1}`);
console.log(`The original array is ${array2}`);
console.log(`The original array is ${array3}`);
console.log(`The original array is ${array4}`);
console.log(`The original array is ${array5}`);
console.log(array);


