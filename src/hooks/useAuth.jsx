import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  // console.log(auth);
  // data OBJECT : => {authData, user,isAuthenticated, login, logout, setIsAuthenticated}
  return auth;
};

export default useAuth;
