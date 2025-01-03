import { createContext, useEffect, useState } from "react";
import clientApi from "../../services/axiosAPI_Config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Retrieve token from localStorage (or sessionStorage)
    const token = localStorage.getItem("token");
    return token ? true : false; // If token exists, the user is authenticated
  });

  // console.log(isAuthenticated)
  // // UseEffect to verify token validity on component mount
  // useEffect(() => {
  //   async function verifyToken() {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       try {
  //         // Send a request to a protected route to verify token validity
  //         const response = await clientApi.get("/verify", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });

  //         // If the response is successful, mark user as authenticated
  //         if (response.status === 200) {
  //           setIsAuthenticated(true);
  //         }
  //       } catch (error) {
  //         // console.log("Token verification failed", error);
  //         setIsAuthenticated(false); // If token is invalid, set as unauthenticated
  //       }
  //     }
  //   }
  //   verifyToken();
  // }, []); // Run only on component mount

  // Login function that stores token
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
