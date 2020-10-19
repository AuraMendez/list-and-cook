import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayMenu from './DayMenu';
// import uuid from 'react-uuid';
// prop types!!! = default props


class Weekdays extends Component {
    render() {
        return (
            <div>
                {this.props.days.map(day => (<DayMenu key={day} day={day}/>))}
            </div>
        );
    }
}

Weekdays.propTypes = {
    days: PropTypes.array
};

export default Weekdays;