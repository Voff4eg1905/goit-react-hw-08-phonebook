import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const NavBar = () => {
  const isRegistered = useSelector(selectIsLoggedIn);
  const getUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
    },
  };
  return (
    <header style={styles.header}>
      {!isRegistered ? (
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      ) : (
        <NavLink to="/contacts">
          <button>Contacts</button>
        </NavLink>
      )}
      {!isRegistered ? (
        <div>
          <NavLink to="/login">
            <button>Log In</button>
          </NavLink>
          <NavLink to="/register">
            <button>Register</button>
          </NavLink>
        </div>
      ) : (
        <>
          <p>Welcome {getUser.name}</p>

          <NavLink to="/logout">
            <button onClick={() => dispatch(logOut())}>Log out</button>
          </NavLink>
        </>
      )}
    </header>
  );
};

export default NavBar;
