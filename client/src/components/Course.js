import React from 'react';
import PropTypes from 'prop-types';

function Course(props) {
    return (
        <li className="course-li" data={props.id}>
            <i className="far fa-dot-circle"/><p>{props.name}</p><i className="far fa-times-circle delete"/>
        </li>
    )

    
}

Course.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string
};

export default Course;