let asiaCup = {
    country1 : 'bangladesh',
    country2 : 'pakistan',
    country3 : 'afganistan',
    country4 : 'Srilanka',
    bangladeshPlayers : ['takib','kuskik','bubel','tustafiz']
}

// first method
let objectKeys = Object.keys(asiaCup);
// console.log(objectKeys)


// second method
let objValues = Object.values(asiaCup);
// console.log(objValues);


// third method
let objEntries = Object.entries(asiaCup);
// console.log(objEntries);


// 4th method
delete asiaCup.country1;
console.log(asiaCup)

// 5th method
let objectSeal = Object.seal(asiaCup)
console.log(objectSeal)

delete asiaCup.country2;
console.log(asiaCup);

asiaCup.country4 = 'hongkong';  // seal method (i) man change korte dibe 2) man delete korte dibe na 3) notun man dhukate dibe na
console.log(asiaCup)

// 6th method

let objectFreez = Object.freeze(asiaCup) 
delete asiaCup.country3 ;
asiaCup.country2 = 'America';
asiaCup.country5 = 'qatar'

// freez method (i) man change korte dibe na 2) man delete korte dibe na 3) notun man dhukate dibe na

