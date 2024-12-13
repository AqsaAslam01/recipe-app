import React from 'react';
import IngredientsList from './IngredientsList';
import RecipeApp from './RecipeApp';
import { getRecipeFromMistral } from '../ai';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);

    React.useEffect(() => {
        console.log('heree', recipeSection.current);
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe])

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
            {ingredients.length > 0 && (<IngredientsList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />)}
            {recipe && <RecipeApp recipe={recipe} />}
        </main>
    )
}