/* 
৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। 
তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। 
সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। 
তবে দেখাতে হবে। 
*/
let randomUser = () =>{
    let url = 'https://randomuser.me/api/?results=50';
    fetch(url)
        .then(response => response.json())
        .then(users => showUser(users.results))
}

let showUser = allUsers => {
    let userIdDiv = document.getElementById('random-user');
    allUsers.forEach(element => {
        let createDiv = document.createElement('div');
        createDiv.classList.add('user-bg');
        if(element.gender === 'male'){
            createDiv.innerHTML = `
            <img src="${element.picture.large}"/>
            <h3>Name: ${element.name.title} ${element.name.first} ${element.name.last}</h3>
            <address>Country: ${element.location.country}, City: ${element.location.city}, 
            Coordinates: ${element.location.coordinates.latitude},${element.location.coordinates.longitude}
            Post-Code: ${element.location.postcode}, State: ${element.location.state} 
            Street: ${element.location.street.name}, ${element.location.street.number}
            Time-Zone: ${element.location.timezone.offset},${element.location.timezone.description}
            </address>
            <p> Email: ${element.email} </p>
        ` 
        userIdDiv.appendChild(createDiv);
        }
        
    });
}
randomUser()
