/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

const multiplyParameter = (a,b,c) => a*b*c;

console.log(multiplyParameter(5,6,7))

// Using General Function

function multiplyWithRegularFunction(a,b,c){
    return a*b*c;
}

let multiply = multiplyWithRegularFunction(3,7,4);
console.log(multiply)