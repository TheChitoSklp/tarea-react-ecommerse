import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "");
    }
  }, []);

  const login = (token, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
    setIsLoggedIn(true);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
