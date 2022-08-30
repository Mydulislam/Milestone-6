let phoneInfo = async(search, howManyShow) =>{
    let url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    let allPhone = await fetch(url);
    let allPhoneInfo = await allPhone.json()
    displayAllPhone(allPhoneInfo.data, howManyShow);
}
let displayAllPhone = (phoneData, howManyShow) =>{
    let phoneAreaSelect = document.getElementById('phone-area');
    let displayWarning = document.getElementById('display');
    let showAll = document.getElementById('show-all');
    if(howManyShow && phoneData.length > 10){
        phoneData = phoneData.slice(0,10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
    if(phoneData.length === 0){
        displayWarning.classList.remove('d-none');
    }
    else{
        displayWarning.classList.add('d-none')
    }
    phoneAreaSelect.textContent = '';
    phoneData.forEach(element => {
        let createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="details('${element.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                </div>
            </div>
        `
        phoneAreaSelect.appendChild(createDiv);
    });
    spinnerFunc(false);
}


// common search and show all button fuction

let searchAndShowAllCommonFunc =(items) =>{
    let inputField = document.getElementById('input-field');
    let inputFieldValue = inputField.value;
    spinnerFunc(true);
    phoneInfo(inputFieldValue , items);
    // inputField.value = ""
}
// search phone 
document.getElementById('input-button').addEventListener('click',function(){
    searchAndShowAllCommonFunc(10)
})

// show all phone
document.getElementById('show-all-button').addEventListener('click',function(){
    searchAndShowAllCommonFunc()
})

// Enter key press and show item
document.getElementById('input-field').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        searchAndShowAllCommonFunc(10)
    }
})
// spinner function

let spinnerFunc = (isSpin) =>{
    let spinnerSelect = document.getElementById('spinnerId');
    if(isSpin){
        spinnerSelect.classList.remove('d-none')
    }
    else{
        spinnerSelect.classList.add('d-none')
    }
}


// Phone details show in modal
    let details = async (mobileSlug) =>{
        let url = `https://openapi.programming-hero.com/api/phone/${mobileSlug}`;
        let phoneName = await fetch(url)
        let phoneDetails = await phoneName.json();
        currentPhoneDetails(phoneDetails);
    }
let currentPhoneDetails = (currentPhone) =>{
    let currentPhoneSelect = document.getElementById('exampleModalLabel');
    currentPhoneSelect.innerText = currentPhone.data.name

}
// phoneInfo('a')