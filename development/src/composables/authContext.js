import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import { appAuth } from "./firebaseConfig/config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    appAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

   
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};


import { useEffect } from 'react';
import { useState } from 'react';
import { useContext, createContext } from 'react';

export const SessionContext = createContext();

export const SessionContextProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({});

  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  return useContext(SessionContext);
};
