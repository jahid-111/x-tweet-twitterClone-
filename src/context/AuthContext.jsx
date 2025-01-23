import { createContext, useEffect, useState } from "react";
import clientApi from "../../services/axiosAPI_Config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const [authData, setAuthData] = useState([]);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await clientApi.get("verify", {
            headers: { Authorization: `Bearer ${token}` },
          });

          setAuthData(response.data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        logout();
      }
    };

    verifyToken();
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);

    clientApi
      .get("verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAuthData(response.data);
      })
      .catch(() => {
        logout();
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setAuthData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authData,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
