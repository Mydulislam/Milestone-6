let kanyePost = () =>{
    let url = 'https://api.kanye.rest';
    fetch(url)
        .then(response => response.json())
        .then(posts => showPost(posts))
}
let showPost = datas =>{
    let postIdSelect = document.getElementById('kanye-post');
        let liCreate = document.createElement('li');
        liCreate.innerText = datas.quote;
        postIdSelect.appendChild(liCreate)
}
