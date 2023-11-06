import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import api from '../api';
import * as api from '../api';

function ScoreManagement() {
  const { user, updateUserScore } = useContext(UserContext);
  const [scoreChange, setScoreChange] = useState(0);
  const [error, setError] = useState('');

  const handleIncreaseScore = async () => {
    try {
      const response = await api.increaseUserScore(user.id, scoreChange);

      if (response.success) {
        updateUserScore(response.newScore);
        setScoreChange(0);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecreaseScore = async () => {
    try {
      const response = await api.decreaseUserScore(user.id, scoreChange);

      if (response.success) {
        updateUserScore(response.newScore);
        setScoreChange(0);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Score Management</h2>
      <p>Your current score: {user.score}</p>
      <div>
        <label>Change Score:</label>
        <input
          type="number"
          value={scoreChange}
          onChange={(e) => setScoreChange(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleIncreaseScore}>Increase Score</button>
      <button onClick={handleDecreaseScore}>Decrease Score</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default ScoreManagement;
