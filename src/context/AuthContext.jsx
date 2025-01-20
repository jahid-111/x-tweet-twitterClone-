import { createContext, useEffect, useState } from "react";
import clientApi from "../../services/axiosAPI_Config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Retrieve token from localStorage (or sessionStorage)
    const token = localStorage.getItem("token");
    return token ? true : false; // If token exists, the user is authenticated
  });

  const login = (token) => {
    localStorage.setItem("token", token); // Store token in localStorage
    setIsAuthenticated(true); // Set state to authenticated
  };

  // Logout function that removes token
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsAuthenticated(false); // Set state to unauthenticated
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
