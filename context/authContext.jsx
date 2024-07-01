//import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
//import { decodeToken } from "react-jwt";
import { loginUser } from "../Api/userApi";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const userData = await loginUser(username, password);
      setUser(userData);
      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error("Login Error:", error);
      return false;
    }
  };
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
