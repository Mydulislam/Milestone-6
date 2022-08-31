let arr = [5,6,8,9];

for(let element of arr){
    // console.log(element)
}

// expected output: 5,6,8,9

let asiaCup = {
    country1 : 'bangladesh',
    country2 : 'pakistan',
    country3 : 'afganistan',
    country4 : 'Srilanka'
}
//using for of loop
let objKeys = Object.keys(asiaCup);

for(let objectKey of objKeys){
    // console.log(objectKey, asiaCup[objectKey])
}


// using for in loop

for(let key in asiaCup){
    // console.log(asiaCup[key])
}



// advanced system

let objectEntries = Object.entries(asiaCup);

for(let [key,value] of objectEntries){
    console.log(key)
}