const BASE_URL = 'https://dummyjson.com';

fetch(`${BASE_URL}/recipes`)
    .then(res => res.json())
    .then(data => {
        const { recipes } = data;
        for (const recipe of recipes) {
            const recipeDiv = document.createElement('div');
            recipeDiv.setAttribute('class', 'recipe');
            const recipeIdP = document.createElement('p');
            recipeIdP.innerText = `Recipe ID: ${recipe?.id}`;
            const recipeNameP = document.createElement('p');
            recipeNameP.innerText = `Name: ${recipe?.name}`;
            const { ingredients, instructions } = recipe;
            const ingredientsHeader = document.createElement('h2');
            ingredientsHeader.innerText = 'Ingredients';
            const ingredientsList = document.createElement('ul');

            ingredients.forEach((ingredient) => {
                const ingredientItem = document.createElement('li');
                ingredientItem.innerText = `${ingredient}`;
                ingredientsList.append(ingredientItem);
            });

            const instructionsHeader = document.createElement('h2');
            instructionsHeader.innerText = 'Instructions';
            const instructionsList = document.createElement('ul');

            instructions.forEach((instruction) => {
                const instructionItem = document.createElement('li');
                instructionItem.innerText = `${instruction}`;
                instructionsList.append(instructionItem);
            });

            const prepTimeMinutesP = document.createElement('p');
            prepTimeMinutesP.innerText = `Prep Time Minutes: ${recipe?.prepTimeMinutes}`;
            const cookTimeMinutesP = document.createElement('p');
            cookTimeMinutesP.innerText = `Cook Time Minutes: ${recipe?.cookTimeMinutes}`;
            const servingsP = document.createElement('p');
            servingsP.innerText = `Servings: ${recipe?.servings}`;
            const difficultyP = document.createElement('p');
            difficultyP.innerText = `Difficulty: ${recipe?.difficulty}`;
            const cuisineP = document.createElement('p');
            cuisineP.innerText = `Cuisine: ${recipe?.cuisine}`;
            const caloriesPerServingP = document.createElement('p');
            caloriesPerServingP.innerText = `Calories per serving: ${recipe?.caloriesPerServing}`;
            const tagsP = document.createElement('p');
            tagsP.innerText = recipe?.tags.reduce((acc, next) => {
                acc += `#${next} `;
                return acc;
            }, '').trim();

            const userIdP = document.createElement('p');
            userIdP.innerText = `User ID: ${recipe?.userId}`;
            const recipeImg = document.createElement('img');
            recipeImg.src = recipe?.image;
            const ratingP = document.createElement('p');
            ratingP.innerText = `Rating: ${recipe?.rating}`;
            const reviewCountP = document.createElement('p');
            reviewCountP.innerText = `Review count: ${recipe?.reviewCount}`;
            const mealTypeP = document.createElement('p');
            mealTypeP.innerText = recipe?.mealType.join(', ').trim();

            recipeDiv.append(recipeIdP, recipeNameP, ingredientsHeader, ingredientsList, instructionsHeader, instructionsList, prepTimeMinutesP, cookTimeMinutesP, servingsP, difficultyP, cuisineP, caloriesPerServingP, tagsP, userIdP, recipeImg, ratingP, reviewCountP, mealTypeP);

            document.body.append(recipeDiv);
        }
    });
