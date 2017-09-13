import React, { Component } from 'react';
import './Recipes.css'
import RecipesList from './components/RecipesList'
import Recipe from './components/Recipe'
import { Route } from 'react-router-dom'
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
    
    return(
      <div className="recipes-container">
      
        <RecipesList recipes={this.state.recipes} />
        <Route path="/recipes/:recipeId" component={Recipe}/>
      </div>
    )
  }
}

export default Recipes