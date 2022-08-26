/* 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.

*/

let array = [33, 50, 79, 78, 90, 101, 30 ];

let divisibleBy10 = array.filter(x => {
    if(x % 10 === 0){
        return x;
    }
})

console.log(divisibleBy10);
console.log(array)

/* 
    3) Now do the same task of question 2. But do this using array.find()
    method. Then compare the output of question 2 & question 3.
*/

let divisibleFind = array.find(x => {
    if(x % 10 === 0){
        return x;
    }
})
console.log(divisibleFind)