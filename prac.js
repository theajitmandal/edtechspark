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
array.pop();
array.push();
array.unshift();
console.log(`The new array is ${array}`);
console.log(`The original array is ${array1}`);
console.log(array);


