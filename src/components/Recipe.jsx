import React, { Component } from 'react'
import Ingredient from './Ingredient'
import request from 'superagent'

class Recipe extends Component {

    constructor () {
        super()

        this.state = {
            recipe: {}
        }
    }

    componentDidMount() {
        const self = this
        const recipeId = this.props.match.params.recipeId

        request.get(`http://localhost:3001/recipes/${recipeId}`).end((error, response) => {
            if(!error){
                self.setState({ recipe: response.body })
            }
        })
    }

    render () {
        const recipe = this.state
        const ingredients = this.state.map((ingredient, index) => {
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

}


export default Recipe