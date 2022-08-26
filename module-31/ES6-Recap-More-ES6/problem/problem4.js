/* 
Follow below array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?
20 + 15 + 22 = 57 . The output will be 57
*/

const people = [
    {name: 'Menna', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

// using for Loop

let sum = 0;
for(let i = 0; i < people.length; i++){
    sum = sum + people[i].age;
}
console.log(sum);


// using Reduce()

const myReduceSum = people.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.age;
},0)
console.log(myReduceSum)


// Access Object values

const student = {
    name : 'Fredie',
    age : 26
}

console.log(student.age);