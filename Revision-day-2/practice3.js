/* 
৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। 
ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। 
চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 
*/

let commentFunc = () =>{
    let commentUrl = 'https://jsonplaceholder.typicode.com/comments';
    fetch(commentUrl)
        .then(response => response.json())
        .then(comments => showComments(comments));
}

let showComments = datas => {
    let commentsAreaDiv = document.getElementById('comments-area')
   datas.forEach(element => {
       let createDiv = document.createElement('div');
       createDiv.classList.add('comments-bg');
       createDiv.innerHTML = `
        <h2>Comment-Id: ${element.id}</h2>
        <h2>Post: ${element.body}</h2>
       `
       commentsAreaDiv.appendChild(createDiv)
   });
}
commentFunc()