import React, { Component } from 'react'
import request from 'superagent'

class EditRecipe extends Component {
    constructor() {
        super()

        this.state = {
            recipe: {},
            message: ''
        }
    }
    componentWillReceiveProps (nextProps) {
        const self = this
      
        request.get(`http://localhost:3001/recipes/${nextProps.match.params.recipeId}`).end((error, response) => {
            if (!error) {
                self.setState({ recipe: response.body })
            }
        })
    }

    componentDidMount () {
        const self = this
        const recipeId = self.props.match.params.recipeId

        request.get(`http://localhost:3001/recipes/${recipeId}`).end((error, response) => {
            if (!error) {
                self.setState({ recipe: response.body })
            }
        })
    }

    handleInputChange (event) {
        const target = event.target
        const name = target.name
      
        this.setState({
            recipe: {
                [name]: target.value
            }
        })
    }

    handleRecipeEdit (event) {
        event.preventDefault()
      
        const recipeId = this.props.match.params.recipeId
      
        const target = event.target
        const name = target.name.value
        const instructions = target.instructions.value
      
        request.put(`http://localhost:3001/recipes/${recipeId}`)
            .send({ 
                name, 
                instructions 
            })
            .end((error, resultId) => {
                this.setState({
                    message: 'Recipe updated successfully'
            })
        })
    }

    render () {
        const recipe = this.state.recipe
        const message = this.state.message
      
        return (
            <form onSubmit={this.handleRecipeEdit.bind(this)} className="edit-recipe">
                <div className="message">
                    {message}
                </div>
                <div className="field">
                    <input type="text" name="name" placeholder="Name" value={recipe.name} onChange={this.handleInputChange.bind(this)}/>
                </div>
                <div className="field">
                    <textarea name="instructions" placeholder="Instructions" value={recipe.instructions} onChange={this.handleInputChange.bind(this)}/>
                </div>
                    <button type="submit">Edit</button>
          </form>
        )
    }
}

export default EditRecipe
