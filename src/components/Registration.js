import React, { useState } from 'react';
// import api from '../api';
import * as api from '../api';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await api.register({ name, email, password });

      if (response.success) {
		return <p>Registration successful! You can now log in.</p>;
	  } else {
		setError(response.message);
	  }
	  
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Registration;
