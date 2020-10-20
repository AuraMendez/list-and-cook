import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
// prop types!!! = default props


class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
        };
    }

    getAllRecipes = () => {
        fetch('/api/recipes/')
            .then(res => res.json())
            .then(allRecipes => this.setState({ recipes: allRecipes }))
            .catch(err => console.log(err));
    }

    getRecipesByTag = (tag) => {
        const url = `/api/recipes/tag/${tag}`
        fetch(url)
            .then(res => res.json())
            .then(allRecipes => this.setState({ recipes: allRecipes }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        document.getElementById('showAll').addEventListener('click', () => {
            this.getAllRecipes();
        });
        document.getElementById('searchByTag').addEventListener('submit', e => {
            e.preventDefault();
            const tag = document.getElementById('tagInput').value;
            this.getRecipesByTag(tag);
        });
    }

    render() {
        return (
            <div>
                <form id="searchByTag">
                    <label>#
                    <input type="text" id="tagInput" name="tag" placeholder="(i.e. soup, vegetarian...)" />
                    </label>
                    <button type="submit">Search</button>
                </form>
                <button id="showAll">Show all recipes</button>
                <div className="recipes-container">
                    {this.state.recipes ?
                        this.state.recipes.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe} />)) :
                        null}
                </div>
            </div>
        );
    }
}

export default Recipes;