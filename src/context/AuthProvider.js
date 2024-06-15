import React, { createContext, useState } from 'react';
import { getLSData } from '../model/localStorage';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const getUserInfo = getLSData('authInfo') || {};
  const [authInfo, setAuthInfo] = useState(getUserInfo);

  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
