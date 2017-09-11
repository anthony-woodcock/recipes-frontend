import React from 'react'

function RecipeListItem (props) {
    return (
        <div className="recipes-list-item">
            <a href={'/recipes/' + props.recipe._id}>{props.recipe.name}</a>
        </div>
    )
}

export default RecipeListItem