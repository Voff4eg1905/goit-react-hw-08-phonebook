import React from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Welcome to your Phone book</h1>
      <Diversity1Icon />
      <p> Add or remove friends </p>
      <Diversity3Icon />
      <p> Never loose important contacts </p>
      <ImportContactsIcon />
      <p> Always at your disposal</p>
    </div>
  );
};

export default Home;
