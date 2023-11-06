import React from 'react';

function UserListItem({ user, onSelectUser }) {
  const { id, name, email, score } = user;

  return (
    <li onClick={() => onSelectUser(user)}>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Score: {score}</p>
    </li>
  );
}

export default UserListItem;
