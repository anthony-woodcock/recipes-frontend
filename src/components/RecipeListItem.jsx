import React from 'react'
import { Link } from 'react-router-dom'

function RecipeListItem (props) {
    return (
        <div className="recipes-list-item">
            <Link to={`/recipes/${props.recipe._id}`}>{props.recipe.name}</Link> - <Link to={`/recipes/edit/${props.recipe._id}`}>Edit</Link>
        </div>
    )
}

export default RecipeListItem