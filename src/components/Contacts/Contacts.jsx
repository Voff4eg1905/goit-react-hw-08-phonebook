import { deleteContact } from 'redux/operations';
import React from 'react';

import {
  selectedContacts,
  selectIsLoading,
  selectContactsList,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectedContacts);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {isLoading === false &&
        contacts.length !== 0 &&
        filteredContacts.map(({ name, number, id }) => {
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
                onClick={() => deleteContacts(id)}
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
