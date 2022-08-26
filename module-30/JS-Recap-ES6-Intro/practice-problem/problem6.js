/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
*/

// first logic
let array1 = [1,2,3]
let array2 = [4,5,6];
let array3 = [...array1,...array2];
console.log(array3)

// Using arrow function
let combineArray = (firstArray , secondArray) => {
    let newArray = [...firstArray,...secondArray];
    console.log(newArray);
    return Math.max(...newArray);
}

console.log(combineArray(array1,array2))