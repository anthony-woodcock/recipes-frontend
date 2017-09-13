import React, { Component } from 'react'
import Ingredient from './Ingredient'
import request from 'superagent'

class Recipe extends Component {

    constructor () {
        super()
        console.log('test')

        this.state = {
            recipe: {}
        }
    }

    componentWillReceiveProps (nextProps) {
        const self = this
        const recipeId = nextProps.match.params.recipeId

        request.get(`http://localhost:3001/recipes/${recipeId}`).end((error, response) => {
            if (!error) {
                self.setState({ recipe: response.body })
            }
        })
    }

    componentDidMount() {
        console.log(this)
        const self = this
        const recipeId = this.props.match.params.recipeId

        request.get(`http://localhost:3001/recipes/${recipeId}`).end((error, response) => {
            if(!error){
                self.setState({ recipe: response.body })
            }
        })
    }

    render () {
        console.log('inside render')
        const recipe = this.state.recipe
        const ingredients = recipe.ingredients && recipe.ingredients.map((ingredient, index) => {
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