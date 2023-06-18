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
