import { useEffect } from 'react';
import { useState } from 'react';
import { useContext, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <AuthContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
