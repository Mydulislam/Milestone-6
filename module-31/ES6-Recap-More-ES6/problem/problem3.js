/* 
    You have an array [ 1, 9, 17, 22 ]. Add the all elements
    of this array and give output. Do this using for loop &
    array.reduce() method. 
*/

// using for loop
let reduceArrau = [ 1, 9, 17, 22 ];
let sum = 0;
for(let i = 0; i < reduceArrau.length; i++){
    sum = sum + reduceArrau[i]
}
console.log(sum);


// using reduce()

let myReduce = reduceArrau.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
},0)

console.log(myReduce);
