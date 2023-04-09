import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Box from '@mui/material/Box';

const styles = {
  margin: 0,
  fontSize: '20px',
};
const UserMenu = () => {
  const getUser = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',

        alignItems: 'center',
        gap: 2,
      }}
    >
      <p style={styles}>{getUser.email}</p>
      <NavLink to="/logout">
        <Button
          variant="contained"
          onClick={() => dispatch(logOut())}
          sx={{ textDecoration: 'none' }}
        >
          Log out <WavingHandIcon sx={{ marginLeft: 1 }} />
        </Button>
      </NavLink>
    </Box>
  );
};

export default UserMenu;
