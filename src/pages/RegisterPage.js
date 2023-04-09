import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const styles = {
  form: {
    width: 480,
    display: 'flex',
    flexDirection: 'column',
  },
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }))
      .then(data => navigate('/contacts'))
      .catch(error => navigate('/'));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h1>Please register your profile</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

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
          Register me!
        </Button>
      </form>
    </>
  );
};

export default RegisterPage;
