import React, { Component } from 'react';
import './Recipes.css'
import RecipesList from './components/RecipesList'
import Recipe from './components/Recipe'
const request = require('superagent');


class Recipes extends Component {
  constructor () {
    super()

    this.state = {
      recipes: []
    }
  }

  componentDidMount () {
    request.get('http://localhost:3001/recipes').end((error,response) =>{ 
      if (!error) {
        this.setState({ recipes: response.body })
      }
    })
  }

  render(){
    const recipe = this.state.recipes.length ? <Recipe recipe={this.state.recipes[0]}/> : ''
    return(
      <div className="recipes-container">
        {recipe}
        <RecipesList recipes={this.state.recipes} />
      </div>
    )
  }
}

export default Recipes