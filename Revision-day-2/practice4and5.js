/* 
4-5. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। 
একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। 
তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।
*/

let showComments = () =>{
    let commentsURL = 'https://jsonplaceholder.typicode.com/comments';
    fetch(commentsURL)
        .then(response => response.json())
        .then(comments => displayHtml(comments))
}

let displayHtml = allCommments => {
    let commentsArea = document.getElementById('comments-area');
    allCommments.forEach(element => {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-bg');
        commentDiv.innerHTML = `
            <div onclick="currentPostShow(${element.id})" class="post-content">
                <h3>Post-Id: ${element.postId}</h3>
                <h3>Id: ${element.id}</h3>
                <h2>Title: ${element.name}</h2>
                <h4>Email: ${element.email}</h4>
                <p>Post: ${element.body}</p>
            </div>
            
        `
        commentsArea.appendChild(commentDiv);
    });
}

let currentPostShow = id =>{
    let url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(resolve => resolve.json())
        .then(postId => showPost(postId))
}

let showPost = currentId => {
    let currentPostDiv = document.getElementById('currrent-post');
    currentPostDiv.textContent = ""
    let createDiv = document.createElement('div');
    createDiv.classList.add('select-post');
    createDiv.innerHTML = `
        <h3>Post-Id: ${currentId.postId}</h3>
        <h3>Id: ${currentId.id}</h3>
        <h2>Title: ${currentId.name}</h2>
        <h4>Email: ${currentId.email}</h4>
        <p>Post: ${currentId.body}</p>
    `
    currentPostDiv.appendChild(createDiv)
}