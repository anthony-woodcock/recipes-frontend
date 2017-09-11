import React, { Component } from 'react';
import './Recipes.css'
import RecipesList from './components/RecipeList'
import superagent from 'superagent'

class Recipes extends Component {
  constructor () {
    super()

    this.state = {
      recipes: []
    }
  }

  componentDidMount () {
    superagent.request.get('http://localhost:3001/recipes').end((error,response) =>{ 
      if (!error) {
        this.setState({ recipes: response.body })
      }
    })
  }

  render(){
    return(
      <div className="recipes-container">
        <RecipesList recipes={this.state.recipes} />
      </div>
    )
  }
}

export default Recipes