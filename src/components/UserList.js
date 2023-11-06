import React, { useState, useEffect } from 'react';
// import api from '../api';
import * as api from '../api';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUserList();
  }, []);

  const loadUserList = async () => {
    try {
      const response = await api.getUserList();

      if (response.success) {
        setUsers(response.users);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Score: {user.score}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default UserList;
