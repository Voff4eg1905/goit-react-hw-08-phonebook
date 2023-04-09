import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const styles = {
  form: {
    width: 480,
    display: 'flex',
    flexDirection: 'column',
  },
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }))
      .then(data => navigate('/contacts'))
      .catch(error => navigate('/'));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Please log in to your Phonebook</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit" sx={{ marginTop: 3 }}>
          Log in
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
