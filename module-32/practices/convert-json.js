// an object convert an json string formate or json object
let obj = {
    name : 'mydul',
    age : 25,
    address: {
        city : 'Dinajpur',
        country : 'Bangladesh'
    }
}

let convertJsonObject = JSON.stringify(obj);
console.log(convertJsonObject)

// json string object convert an object

let convertObject = JSON.parse(convertJsonObject);
console.log(convertObject)