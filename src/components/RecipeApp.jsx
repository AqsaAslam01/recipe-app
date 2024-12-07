import ReactMarkdown from 'react-markdown'

export default function RecipeApp(props) {
    return (
        <section className="suggested-recipe-container" aria-live='polite'>
            <h2>Chef Recommandation:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}