import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Course from './Course';



class DayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  randomId() {
    return `key${Math.floor(Math.random() * Math.floor(1000000))}`
  }

  getRecipeById = id => {
    const url = `http://localhost:8000/api/recipes/id/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(newCourse => this.setState((prevState) => ({courses: [...prevState.courses, newCourse]}) ))
      .catch(err => console.log(err));
  }

  deleteCourse = () => {
    console.log('delete 1');
  }

  componentDidMount() {
    document.querySelector(`#${this.props.day.toLowerCase()} .addCourseForm`).addEventListener('submit', e => {
      e.preventDefault();
      const formInput = document.querySelector(`#${this.props.day.toLowerCase()} input`);
      this.getRecipeById(formInput.value);
      formInput.value = '';
    });
    
    // FOR FUTURE USE: Delete Button
    // const deleteButtons = Array.from(document.querySelectorAll('.course-li i.delete'))
    // if (deleteButtons) {
    //   console.log('these are the buttons', deleteButtons);
    //   deleteButtons.map(btn => btn.addEventListener('click', e => {
    //   this.deleteCourse();
    //   }))
    // }
  }



  render() {
    return (
      <div className="day-menu" id={this.props.day.toLowerCase()}>
        <h3>Menu for {this.props.day}</h3>
        <form className="addCourseForm">
          <input type="text" name="newCourse" placeholder="Paste and enter" /><button type="submit"><i className="fas fa-plus" /></button>
        </form>
        <ul className="courses-container">
          {this.state.courses?
            this.state.courses.map(recipe => (<Course key={this.randomId()}name={recipe.name} id={recipe.id} />)) :
            null}
        </ul>
      </div>
    );
  }

}

DayMenu.propTypes = {
  day: PropTypes.string
};

export default DayMenu;