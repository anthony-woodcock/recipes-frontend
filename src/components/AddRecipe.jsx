import React, { Component } from 'react'
import request from 'superagent'

class AddRecipe extends Component {
    constructor () {
        super()

        this.state = {
            message: ''
        }
    }

    handleRecipeAdd (event) {
        event.preventDefault()
      
        const target = event.target
        const name = target.name.value
        const instructions = target.instructions.value
      
        request.post('http://localhost:3001/recipes')
            .send({ 
                name, 
                instructions 
            })
            .end((error, resultId) => {
                this.setState({
                    message: 'Recipe added successfully'
            })
      
            target.name.value = ''
            target.instructions.value = ''
        })
      }

    render () {
    const message = this.state.message || 'Add a new recipe'
      
        return (
            <form onSubmit={this.handleRecipeAdd.bind(this)} className="add-recipe">
                <div className="message">
                    {message}
                </div>
                <div className="field">
                    <input type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <textarea name="instructions" placeholder="Instructions"></textarea>
                </div>
                    <button type="submit">Add</button>
            </form>
        )
    }
}

export default AddRecipe