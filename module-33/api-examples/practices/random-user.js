let user = ()=> {
    let url = 'https://randomuser.me/api/?results=15';
    fetch(url)
        .then(respononse => respononse.json())
        .then(users => showUser(users.results))
}

let showUser = userInfo => {
    let userSelect = document.getElementById('user');
    console.log(userInfo)
    userInfo.forEach(data => {
        let createDiv = document.createElement('div');
        createDiv.classList.add('bg')
        if(data.gender === 'male'){
            createDiv.innerHTML = `
            <img src = "${data.picture.large}"/>
            <h2> User: ${data.name.first} ${data.name.last}</h2>
            <p>Email: ${data.email} </p>
            <address>Address : ${data.location.city} ${data.location.state} ${data.location.country}</address>
        `
        userSelect.appendChild(createDiv);
        }
    });
}
user()