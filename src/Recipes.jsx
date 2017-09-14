import React, { Component } from 'react';
import './Recipes.css'
import RecipesList from './components/RecipesList'
import Recipe from './components/Recipe'
import { Route } from 'react-router-dom'
import AddRecipe from './components/AddRecipe'
import EditRecipe from './components/EditRecipe'
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
        <Route path="/recipes/add" component={AddRecipe}/>
        <Route path="/recipes/edit/:recipeId" component={EditRecipe}/>
      </div>
    )
  }
}

export default Recipes