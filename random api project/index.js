const submitForm = document.getElementById('submit')
const searchBar = document.getElementById('search')
const resultHeading = document.querySelector('.result-heading')
const drinks = document.querySelector('.drinks')






function populateDrinks(e){
    e.preventDefault()

    let inputVal = searchBar.value

    if(inputVal.trim()){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`)
    .then(res => res.json())
    .then(data => {
        resultHeading.innerHTML = `<h1> Search result for ${inputVal}</h1>`

        if(data.drinks === null){
            resultHeading.innerHTML = `<h1> No results found for '${inputVal}'</h1>`
        } else {
            drinks.innerHTML = data.drinks.map(drink => `
            <div class='drinks'> </div>
            <img src=${drink.strDrinkThumb} alt=${drink.strDrink} />
            
            <h3> ${drink.strDrink} <h3>

            `).join("")

        }

        console.log(data)
    })
} else {
    alert('search cannot be empty')
}

    searchBar.value = ''
}

submitForm.addEventListener('submit', populateDrinks)
