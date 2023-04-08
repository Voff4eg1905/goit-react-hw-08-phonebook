import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const styles = {
  form: {
    width: 480,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
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
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register me!</button>
      </form>
    </>
  );
};

export default RegisterPage;
