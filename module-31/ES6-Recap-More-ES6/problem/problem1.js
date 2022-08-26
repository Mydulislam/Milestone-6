/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/


// using for loop
let oddArray = [ 1, 3, 5, 7, 9 ];
let evenArray = []
for(let i = 0 ; i < oddArray.length; i++){
    evenArray.push(oddArray[i] + 1)
}
console.log(evenArray);

// using map 
let even = []
let evenConvert = oddArray.map(x => even.push(x+1));
console.log(even);

// using function 

let funcEven = [];
let convertEven = oddArray.map(function(x){
    return funcEven.push(x + 1)
});
console.log(funcEven);

