/*3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.*/


// default parameter set with second parameter
let usingArrowFunctionWithDefaultParametersecondPara = (a , b = 2) => a + b;
console.log(usingArrowFunctionWithDefaultParametersecondPara(10));

// first Parameter set default value
let usingArrowFunctionWithDefaultParameter = (a = 1, b) => a + b;

console.log(usingArrowFunctionWithDefaultParameter(undefined, 5)); // it realy hard practices 

// another process first parameter set default value

let defaulWithFirst = ({x = 2 , y}) => x*y;
console.log(defaulWithFirst({y:5}))

// Regular function

function add({ x = 5, y }) {
    return x + y;
}

console.log(add({ y: 3 }));


// using destructuring

let defaultParameterWithDestructuring = (p = 5, q) => p*q;

console.log(defaultParameterWithDestructuring(...[,5]));

