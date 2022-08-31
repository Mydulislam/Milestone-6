//  1st way 

let obj1 = {
    firstName : 'Mydul',
    lastName : 'islam',
    age : 26
}
obj1.firstName = 'Bangladesh';
// console.log(obj1.age)

// 2nd way 

let obj2 = {};

obj2.firstName = 'Rashed';
obj2.lastName = 'Menon';
obj2.age = 20;
obj2.fullName = function(){
    return this.firstName + " "+ this.lastName
}
// console.log(obj2)


// 3rd way besi lagibe (class constructor object)

class info{
    firstName = 'Masud';
    lastName = 'Rana';
    constructor(age,village,address){
        this.age = age;
        this.village = village;
        this.address = address
    }
}

let obj3 = new info(35,'kalikapur','sadar,Dinajpur');
// console.log(obj3.address)
