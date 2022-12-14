/* 
১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে 
কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা 
জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
*/

let placeholderComments = () =>{
    let commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    fetch(commentsUrl)
        .then(response => response.json())
        .then(posts => console.log(posts))
        
}
placeholderComments()