/*Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result */

// a ) 

let myFriends = ['masud','rashed','abdul-hakim','mydulislam'];

let friendsFunction = arr => {
    let newArray = [];
    for(let friend of arr){
        if(friend.length % 2 === 0){
            newArray.push(friend);
        }
    }
    return newArray;
}
console.log(friendsFunction(myFriends))

// Using Regular Function 

function friends(frendsArray){
    let myEvenFriend = [];
    for(let i =0; i< frendsArray.length; i++){
        if(frendsArray[i].length % 2 === 0){
            myEvenFriend.push(frendsArray[i])
        }
    }
    return myEvenFriend;
}
console.log(friends(myFriends))