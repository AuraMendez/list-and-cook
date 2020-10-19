import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeCard extends Component {
    copy = () => {
        const id = this.props.recipe.id;
        navigator.clipboard.writeText(id).then(() => console.log(`The id ${id} is now in your clipboard`));
    }

    render() {
        return (
            <div className="recipe-card">
                <h3>{this.props.recipe.name}</h3>
                <i onClick={this.copy} className="fas fa-copy"></i>
            </div>
        );
    }
}
RecipeCard.propTypes = {
    recipe: PropTypes.object
};

export default RecipeCard;