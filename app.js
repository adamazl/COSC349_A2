// Define an array to store recipes
const recipes = [];

// Function to add a new recipe
function addRecipe(event) {
    event.preventDefault();

    const recipeTitle = document.getElementById('recipeTitle').value.trim();
    const recipeIngredients = document.getElementById('recipeIngredients').value.trim();
    const recipeInstructions = document.getElementById('recipeInstructions').value.trim();

    if (recipeTitle !== '' && recipeIngredients !== '' && recipeInstructions !== '') {
        const recipe = {
            title: recipeTitle,
            ingredients: recipeIngredients,
            instructions: recipeInstructions,
        };

        recipes.push(recipe);
        displayRecipes();

        // Reset form fields
        document.getElementById('recipeTitle').value = '';
        document.getElementById('recipeIngredients').value = '';
        document.getElementById('recipeInstructions').value = '';
    }
}

// Function to display recipes
function displayRecipes() {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <h4>Ingredients:</h4>
            <p>${recipe.ingredients}</p>
            <h4>Instructions:</h4>
            <p>${recipe.instructions}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipesContainer.appendChild(recipeElement);
    });
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Event listener for the recipe submission
document.getElementById('recipeForm').addEventListener('submit', addRecipe);

// Initial display of recipes
displayRecipes();
