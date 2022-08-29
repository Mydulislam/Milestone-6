let allFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(response => response.json())
        .then(info => showFood(info.meals))
}

let showFood = foods =>{
    let foodArea = document.getElementById('food-area');
    foodArea.innerHTML = "";
    foods.forEach(element => {
        let createDiv = document.createElement('div');
            createDiv.classList.add('food-info')
        createDiv.innerHTML = `
            <div onclick="clickDetails(${element.idMeal})">
                <img src="${element.strMealThumb}"/>
                <div class="card-body">
                    <h3>${element.strMeal}</h3>
                    <p>${element.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `
        foodArea.appendChild(createDiv)
    });
}

let clickDetails = foodID =>{
    let foodIdUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`
    fetch(foodIdUrl)
        .then(resolveFood => resolveFood.json())
        .then(id => DetailsFood(id))
}

let DetailsFood = currentFood => {
    let currentFoodDiv = document.getElementById('current-food-area');
    currentFoodDiv.innerHTML = `
        <div class="food-content">
                <img src="${currentFood.meals[0].strMealThumb}"/>
            <div class="card-body">
                <h3>${currentFood.meals[0].strMeal}</h3>
                <p>${currentFood.meals[0].strInstructions.slice(0,200)}</p>
            </div>
        </div>
    `
    console.log(currentFood)
}

let searchFood = () =>{
    let inputField = document.getElementById('input-field');
    let inputFieldValue = inputField.value;
    allFood(inputFieldValue);
    inputField.value = '';
}
allFood('')