import React, { useState, useEffect } from 'react';
// import api from '../api';
import * as api from '../api';

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUserList();
  }, []);

  const loadUserList = async () => {
    try {
      const response = await api.getUserList();

      if (response.success) {
        setUsers(response.users);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleIncreaseScore = async () => {
    if (selectedUser) {
      try {
        const response = await api.increaseUserScore(selectedUser.id);

        if (response.success) {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === selectedUser.id
                ? { ...user, score: response.newScore }
                : user
            )
          );
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDecreaseScore = async () => {
    if (selectedUser) {
      try {
        const response = await api.decreaseUserScore(selectedUser.id);

        if (response.success) {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === selectedUser.id
                ? { ...user, score: response.newScore }
                : user
            )
          );
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>User List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserSelect(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div>
          <h3>Selected User: {selectedUser.name}</h3>
          <p>Score: {selectedUser.score}</p>
          <button onClick={handleIncreaseScore}>Increase Score</button>
          <button onClick={handleDecreaseScore}>Decrease Score</button>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
