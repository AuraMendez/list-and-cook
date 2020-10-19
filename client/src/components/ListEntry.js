import React from 'react';
import PropTypes from 'prop-types';


function ListEntry(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.qty}</td>
            <td>{props.unit}</td>
        </tr>
    )
}

ListEntry.propTypes = {
    name:PropTypes.string,
    unit:PropTypes.string,
    qty: PropTypes.number,
  };

export default ListEntry;