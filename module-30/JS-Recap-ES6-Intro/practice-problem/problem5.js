/* 
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
*/

let myAarrayNum = [5,6,8,9];
let newSquareArray = [];
let arrowFunctionWorkThis = arr => {
    for(num of arr){
        // a) Square each array element

        newSquareArray.push(num*num)
    }
}
arrowFunctionWorkThis(myAarrayNum);
console.log(newSquareArray)

// b) Calculate the sum of the squared elements
let s = 0
for(sum of newSquareArray){
    s = s + sum;
}

console.log(s);

// c) Return the average of the sum of the squared elements

let squareAverge = averge => averge / newSquareArray.length;
console.log(squareAverge(s))


/* ============================
    one function using this work
==================================*/

let avergeFunction = arrNibe => {
    let mySquareArray = []
    let mySum = 0;
    for(arrElement of arrNibe){
        // a) Square each array element
        let z = arrElement * arrElement;
        mySquareArray.push(z);

        // b) Calculate the sum of the squared elements
        mySum = mySum + z;
    }
    console.log(mySquareArray);
    console.log(mySum)

    // c) Return the average of the sum of the squared elements
    let averageSum = mySum / arrNibe.length;
    return averageSum;
}

console.log(avergeFunction(myAarrayNum));