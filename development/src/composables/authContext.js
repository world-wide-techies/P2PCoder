import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import { appAuth } from "./firebaseConfig/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const persistUser = localStorage.getItem("user");

    setCurrentUser(JSON.parse(persistUser));
  }, []);

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
