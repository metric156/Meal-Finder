const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');

//Search Meal and Fetch from API
function searchMeal(e) {
    e.preventDefault();

    //Clear single meal
    single_mealEl.innerHTML = '';

    //Get search term
    const term = search.value;

    //Check for empty
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    } else {
        alert('Please enter a search term');
    }
}

//Event Listeners
submit.addEventListener('submit', searchMeal);
