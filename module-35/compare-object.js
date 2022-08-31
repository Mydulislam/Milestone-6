let obj1 = {a:2};
let obj2 = {a:2};

if(obj1 === obj2){
    console.log('it is equal')
}
else{
    console.log('it is false. not equal')
}

// extected outpur: it is false. not equal


let obj3 = obj2 ;

if(obj3 === obj2){
    console.log('it is equal')
}
else{
    console.log('it is false. not equal')
}

// expected output: it equal


// final compare Object

const first = {a:5, b:2, d:5}
const second = {a:5, c:5, b:2}

function comparObjct(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(let key of firstKeys){
            if(firstKeys[key] !== secondKeys[key]){
                return false
            }
        }
        return true;
    }
    else{
        return false;
    }
    
}
comparObjct(first,second)