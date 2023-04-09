import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const getUser = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{getUser.email}</p>
      <NavLink to="/logout">
        <button onClick={() => dispatch(logOut())}>Log out</button>
      </NavLink>
    </div>
  );
};

export default UserMenu;
