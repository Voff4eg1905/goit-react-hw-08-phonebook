import React from 'react';

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
      <p> Add or remove friends </p>
      <p> Never loose important contacts </p>
      <p> Always at your disposal</p>
    </div>
  );
};

export default Home;
