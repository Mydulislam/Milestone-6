// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function loadJsonTodosFirstData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/2';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function jsonPost(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

function jsonComments(){
    let url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

function jsonAlbum(){
    let url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

function jsonUser(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

// Show our html code

function showUser(){
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(userData => showData(userData))
}

function showData(users){
    let userArea = document.getElementById('user-area');
    for(let user of users){
        let divUser = document.createElement('div');
        divUser.classList.add('spacing')
        divUser.innerHTML = `
            <h3> Id : ${user.id} </h3>
            <h2>Name : ${user.name}</h2>
            <p> Email : ${user.email}</p>
        `;
        userArea.appendChild(divUser)
    }
}

showUser()

function showPost(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(posts =>postFunct(posts))
}

function postFunct(datas){
    let postSelect = document.getElementById('post-area');
    for(let data of datas){
        let divCreate = document.createElement('div');
        divCreate.classList.add('postspacing');
        divCreate.innerHTML = `
            <h3> Id: ${data.id}</h3>
            <h2> Title : ${data.title}</h2>
            <p> Posts: ${data.body} </p>
        `
        postSelect.appendChild(divCreate);

        if(postSelect.children.length === 20){
            return
        }
         
    }
    
}
showPost()

// Todos display HTML

function showTodos(){
    let url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
        .then(res => res.json())
        .then(todos =>todosFunct(todos))
}

function todosFunct(datas){
    let todosSelect = document.getElementById('todos-area');
    for(let data of datas){
        let divCreate = document.createElement('div');
        divCreate.classList.add('todos-spacing');
        divCreate.innerHTML = `
            <h3> Id: ${data.id}</h3>
            <h2> Title : ${data.title}</h2>
            <p> Posts: ${data.completed} </p>
        `
        todosSelect.appendChild(divCreate);
        
        if(todosSelect.children.length === 30){
            return
        }
         
    }
    
}
showTodos()


// Comments Diplay

function showComments(){
    let url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(response => response.json())
        .then(comments => passComments(comments))
}

function passComments(datas){
    let commentSelect = document.getElementById('comments-area');
    for(let data of datas){
        let divCreate = document.createElement('div');
        divCreate.classList.add('comment-bg')
        divCreate.innerHTML = `
        <h3> Id: ${data.id}</h3>
        <h2> Name : ${data.name}</h2>
        <p> email: ${data.email} </p>
        <p> Comment:${data.body} </p>
        `
        commentSelect.appendChild(divCreate)
        if(commentSelect.children.length === 10){
            return
        }
    }
}
showComments()