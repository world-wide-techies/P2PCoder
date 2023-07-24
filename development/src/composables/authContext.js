import { useEffect } from 'react';
import { useState } from 'react';
import { useContext, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({});

  return (
    <AuthContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
