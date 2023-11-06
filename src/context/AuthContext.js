import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const login = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const isAuthenticated = () => {
    return authToken !== null;
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
