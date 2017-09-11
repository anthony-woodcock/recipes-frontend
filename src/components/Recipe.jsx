import React from 'react'
import Ingredient from './Ingredient'

function Recipe (props) {
    const recipe = props.recipe
    const ingredients = props.recipe.ingredients.map((ingredient, index) => {
        return <Ingredient key={index} ingredient={ingredient} />
    })

    return (
        <div className="recipes-single">
            <h2 className="title">{recipe.title}</h2>
            <ul className="ingredients">
                {ingredients}
            </ul>
            <div className="instructions">
                {recipe.instructions}
            </div>
        </div>
    )
}

export default Recipe