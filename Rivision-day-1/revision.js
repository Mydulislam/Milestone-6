/* 
১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে।
 তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/

const fullName = 'Mydul islam';

for(let i =0; i <= 10; i++){
    console.log(i)
}

let age = 20;


/* 
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। 
একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার
 টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/
let myHobby = {
    hobbyName : 'web developer',
    hope : 'to help family and work with islam',
    dailyPrayer : true
}
let dynamicTemplatString = `My full Name is ${fullName} and age is ${age}. My hobby is ${myHobby.hobbyName} and 
 i work ${myHobby.hope}. I pray salat ${myHobby.dailyPrayer === true ? 'Daily' : 'Gap'}
`

console.log(dynamicTemplatString)


/* 
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে 
তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
*/

let divisionFive = x => x / 5;
console.log(divisionFive(25));

/* 
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। 
প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/

let sumWithMultiply = (x,y) => {
    x += 2;
    y += 2;
    return x * y;
}

console.log(sumWithMultiply(5,2));

/* 
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো।
 যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।
*/

let parmeterMultiply = (a,b,c) => a*b*c;
console.log(parmeterMultiply(2,3,4));

/* 
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। 
সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/

let sumWithMultiplyTowPara = (x,y) => {
    let p = x + 2;
    let q = y + 2;
    let multiply = p * q;
    return multiply; 
}

console.log(sumWithMultiplyTowPara(5,6));

/* 
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/

let array1 = [1,2,3,4,5];

let multiplyFive = array1.map(arr => arr * 5);

console.log(multiplyFive)

/* 
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে 
নিয়ে আসার জন্য filter ইউজ করো 
*/

let array2 = [1,5,8,7,6,4,3,2];

let oddNumberFilter = array2.filter(arr => {
    if(arr % 2 === 0){
        return arr;
    }
})

console.log(oddNumberFilter)

/* 
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা 
সেই অবজেক্টকে find দিয়ে বের করো। 
*/

let phone = [
    {name: 'Vivo', price : 10000},
    {name: 'Oppo', price : 20000},
    {name: 'Symphony', price : 12000},
    {name: 'Motorola', price : 50000},
    {name: 'Iphone', price : 80000}
]

let findFiveThousandPrice = phone.find(x => {
    if(x.price === 50000){
        return x;
    }
})
console.log(findFiveThousandPrice)

/* 
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে 
ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/

const friends = {
    fname : 'Abdul Malek',
    fage : 26,
    address : 'Textile Bazar',
    phone : '017........'
}

let {fage, name, address, fphone} = friends;
console.log(fage)

/* 
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন 
এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
*/

let destructuredThirdArray = [5,14,16,18,52];

let [, , three] = destructuredThirdArray;

console.log(three);

/* 
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে 
সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/

function threeParameter(a, b, c=7){
    return a + b + c;
}

let sumFumction = threeParameter(5,6);
console.log(sumFumction)

// using arrow function

let sumThree = (x, y, z=7) => x + y + z;
console.log(sumThree(3,4));

/* 
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি 
    এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও
     সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন
      একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/

let studentInfo = {
    studentName : 'Abdul Malek',
    address : {
        contry : {
            city : 'Dinajpur',
            originalCountry : 'Bangladesh'
        },
        road : '122/11 d-block Dhaka',
        relative : ['mahabub, joyonto, manik, todu']
    },
    fatherName : 'Josim-Uddin',
    motherName : 'Mofesena Begum',
    subject : ['Bangladesh','English','Mathmatics']
}

let someStudentInfo = studentInfo.address.contry.originalCountry; // correct
let someStudentInfoo = studentInfo.address.contri?.originalCountry; // optional chaining
console.log(someStudentInfo)
console.log(someStudentInfoo)