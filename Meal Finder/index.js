const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

// functions

// search meal and fetch from api
function searchMeal(e){
    e.preventDefault();

    // clear single meal
    single_mealEl.innerHTML = ''

    // get search term
    const term = search.value

    //check for empty submit
    if(term.trim()){
        //get request so we dont need to specify the method
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                resultHeading.innerHTML = `<h2>Search result for '${term}':</h2>`

                // if our response doesnt exists in our api
                if(data.meals === null){
                    resultHeading.innerHTML = 'There are no search results. Try again.'
                } else {
                    mealsEl.innerHTML = data.meals.map(meal => `
                    <div class='meal'>
                    <img src='${meal.strMealThumb}' alt='${meal.strMeal}'/>
                    <div class="meal-info" data-mealId="${meal.idMeal}">
                        <h3>${meal.strMeal} </h3>
                    </div>
                    </div>
                    `).join('')
                }
            })
            // clear search value
            search.value = ''
    } else {
        alert('search cannot be empty')
    }
}



// fetch meal by ID
function getMealById(mealId){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => {
        // data returns the single meal by its ID
        const meal = data.meals[0]

        addMealToDOM(meal)
    })
}

function addMealToDOM(meal){
    const ingredients = []

    for(let i = 1; i <= 20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} -- ${meal[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }

    single_mealEl.innerHTML = `
    <div class='single-meal'>
    <h1>${meal.strMeal}</h1>
    <img src='${meal.strMealThumb}' alt="${meal.strMeal}" />
    <div class="single-meal-info>
    ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
    ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
    </div>
    <div class='main'>
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
            ${ingredients.map(ingredient =>
                `<li>${ingredient} </li>`
            ).join("")}
        </ul>
    </div>
    </div>
    `;
}

//Event Listeneres
submit.addEventListener('submit', searchMeal)
mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if(item.classList){
            return item.classList.contains('meal-info')
        } else {
            return false
        }
    })

    if(mealInfo){
        const mealID = mealInfo.getAttribute('data-mealid')
        getMealById(mealID)
    }
})
