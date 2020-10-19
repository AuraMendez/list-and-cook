import React, { Component } from 'react';

import ListEntry from './ListEntry';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            tableDisplay: false
        };
    }

    randomId() {
        return `le${Math.floor(Math.random() * Math.floor(1000000))}`
    }

    extractIngredients = (recipe) => {
        const keys = Object.keys(recipe.ingredients);
        keys.map(key => recipe.ingredients[key].forEach(ingredient => (
            this.setState(prevState => ({ ingredients: [...prevState.ingredients, ingredient] }))
        )));
    }

    getRecipeById = (id) => {
        const url = `http://localhost:8000/api/recipes/id/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(recipe => this.extractIngredients(recipe))
            .catch(err => console.log(err));
    }

    getAllIds = () => {
        const allIds = [];
        document.querySelectorAll('.course-li').forEach(element => allIds.push(element.getAttribute('data')))
        allIds.forEach(id => this.getRecipeById(id));
    }

    componentDidMount() {
        document.querySelector('#generateList').addEventListener('click', () => {
            this.setState({ tableDisplay: true });
            // document.querySelector('.table-ingredients').style.display = "block";
            this.getAllIds();
        })
    }

    render() {
        return (
            <div>
                <button id="generateList">Generate List</button>
                {this.state.tableDisplay ?
                    <table className="table-ingredients">
                        <thead>
                            <tr>
                                <th colSpan="3">Your shopping list</th>
                            </tr>
                            <tr>
                                <td>Ingredients</td>
                                <td>Quantity</td>
                                <td>Units</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ingredients
                                ? this.state.ingredients.map(ingredient =>
                                    <ListEntry
                                        key={this.randomId()}
                                        name={ingredient.name}
                                        unit={ingredient.unit}
                                        qty={ingredient.qty}
                                    />)
                                : null}
                        </tbody>
                    </table> : null}
            </div>

        )
    }
}

export default List;