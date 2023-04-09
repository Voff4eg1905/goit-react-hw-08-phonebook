import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Box from '@mui/material/Box';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'red',
        gap: 3,
      }}
    >
      <h1>My List of Contacts</h1>
      <Form />
      <Filter />
      {isLoading ? <p>Loading</p> : <Contacts />}
    </Box>
  );
};

export default ContactsPage;
