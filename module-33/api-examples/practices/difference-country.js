let countryInfo = () => {
    let url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(response => response.json())
        .then(countries => showContris(countries))
}

let showContris = countries => {
    let countryDiv = document.getElementById('country');
    countries.forEach(element => {
        let createDiv = document.createElement('div');
        createDiv.classList.add('country-bg')
        createDiv.innerHTML = `
            <div>
                <h3>Name: ${element.name.common}</h3>
                <p>Capital: ${element.capital ? element.capital[0] : 'No Capital'}</p>
                <button onclick="detailsInfo('${element.cca2}')">Details</button>
            </div>
            <div style="text-align: right">
                <img src ="${element.flags.png}"/>
            </div>
        `
        countryDiv.appendChild(createDiv)
    });
}

let detailsInfo = (countryName) =>{
    let url2 = `https://restcountries.com/v3.1/alpha/${countryName}`;
    fetch(url2)
        .then(res => res.json())
        .then(country => showDetails(country));
}

let showDetails = countryInfo => {
    let details = document.getElementById('details-country');
        details.textContent = "";
    let createCountryArea = document.createElement('div');
    createCountryArea.innerHTML = `
        <h2>Name: ${countryInfo[0].name.common}</h2>
        <img src="${countryInfo[0].flags.png}"/>
        `
        details.appendChild(createCountryArea)
    // console.log(countryInfo)
}
countryInfo()