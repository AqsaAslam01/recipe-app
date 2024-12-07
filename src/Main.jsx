import React from 'react';
import IngredientsList from './components/IngredientsList';
import RecipeApp from './components/RecipeApp';
import { getRecipeFromMistral } from './ai';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(generatedRecipe);
    }

    function submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(preIngredients => [...preIngredients, newIngredient]);
        event.target.reset();
    }

    return (
        <main>
            <form onSubmit={submitForm} className='form'>
                <input type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient">
                </input>
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <RecipeApp recipe={recipe} />}
        </main>
    )
}