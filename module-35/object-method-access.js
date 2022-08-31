// object methode access
let myInfo = {
    firstName : 'Rashed ',
    lastName : 'Menon',
    favoriteFood :['rice','pata-sak','alur-votta','alur-nara'],
    fullName : function(){
        return this.firstName + this.lastName;
    },
    age : function(age){
        console.log(this.fullName());
        return this.age = age;
    }
}
let fullNameInfo = myInfo.fullName();
// console.log(fullNameInfo)
let z = myInfo.age(22);
console.log(z)

let myInfoArray = myInfo.favoriteFood;
for(let food of myInfoArray){
    console.log(food)
}
