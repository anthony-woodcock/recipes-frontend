import React from 'react'
import RecipeListItem from './RecipeListItem'

function RecipesList (props) {
    const recipeListItems = props.recipes.map(recipe => {
        return <RecipeListItem key={recipe._id} recipe={recipe} />
    })

    return (
        <div className="recipes-list">
            {recipeListItems}
        </div>
    )
}

export default RecipesList