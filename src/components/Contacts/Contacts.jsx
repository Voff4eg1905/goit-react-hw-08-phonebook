import { deleteContact } from 'redux/operations';
import React from 'react';
import Button from '@mui/material/Button';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import ContactsIcon from '@mui/icons-material/Contacts';

import {
  selectedContacts,
  selectIsLoading,
  selectContactsList,
} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  ul: { padding: 0 },
  li: { listStyle: 'none', padding: 0 },
};
const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectedContacts);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul style={style.ul}>
      {isLoading === false &&
        contacts.length !== 0 &&
        filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={id} style={style.li}>
              <ContactsIcon sx={{ marginRight: 5 }} />
              {name}: {number}
              <Button
                type="button"
                variant="outlined"
                onClick={() => deleteContacts(id)}
                sx={{ marginLeft: 2 }}
              >
                <PersonOffIcon sx={{ marginRight: 1 }} />
                Delete
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

export default Contacts;
