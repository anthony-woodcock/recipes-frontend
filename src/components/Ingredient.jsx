import React from 'react'

function Ingredient (props) {
    render () {
        return (
            <div className="ingredients">
                <li>{props.ingredient}</li>
            </div>
        )
    }
}

export default Ingredient