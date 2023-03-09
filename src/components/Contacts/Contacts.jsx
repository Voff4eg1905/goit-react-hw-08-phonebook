import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ list, deleteContact }) => {
  return (
    <ul>
      {list.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              style={{
                fontSize: '20px',
                padding: '5px 20px',
                borderRadius: '10px',
                backgroundColor: 'white',
                color: 'blue',
                border: '2px solid blue',
                marginLeft: '25px',
              }}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.object,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
