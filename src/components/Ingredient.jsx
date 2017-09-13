import React from 'react'

function Ingredient (props) {

    const ingredient = props.ingredient
    
        return (
            <div>
                <li>{ingredient.name}</li>
                <li>{ingredient.quantity}</li>
                <li>{ingredient.unit}</li>
            </div>

        )
    
}

export default Ingredient