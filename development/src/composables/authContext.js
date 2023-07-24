import { useEffect } from 'react';
import { useState } from 'react';
import { useContext, createContext } from 'react';
import { appAuth } from './firebaseConfig/config';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
appAuth.onAuthStateChanged((user) => {})
  
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
