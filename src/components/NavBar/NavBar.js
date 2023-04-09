import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const NavBar = () => {
  const isRegistered = useSelector(selectIsLoggedIn);
  const getUser = useSelector(selectUser);

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
      padding: '20px',
    },
    welcome: {
      fontSize: '26px',
      margin: 0,
    },
  };
  return (
    <header style={styles.header}>
      {!isRegistered ? (
        <NavLink to="/">
          <Button variant="contained">
            Home <HomeIcon sx={{ marginLeft: 1 }} />
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/contacts">
          <Button variant="contained">
            Contacts <ContactEmergencyIcon sx={{ marginLeft: 1 }} />
          </Button>
        </NavLink>
      )}
      {!isRegistered ? (
        <div>
          <NavLink to="/login">
            <Button variant="contained">
              Log In <PermContactCalendarIcon sx={{ marginLeft: 1 }} />
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button variant="contained" sx={{ marginLeft: 1 }}>
              Register <PersonAddAltIcon sx={{ marginLeft: 1 }} />
            </Button>
          </NavLink>
        </div>
      ) : (
        <>
          <p style={styles.welcome}>Welcome {getUser.name}</p>
          <UserMenu />
        </>
      )}
    </header>
  );
};

export default NavBar;
