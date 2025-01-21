import PublicRouter from "./PublicRouter"; // Public routes
import AppRouter from "./AppRouter";
import useAuth from "../hooks/useAuth";

const AuthRouter = () => {
  const { isAuthenticated } = useAuth();
  // console.log(isAuthenticated);
  // console.log("Root Auth Check =>", isAuthenticated);

  return isAuthenticated ? <AppRouter /> : <PublicRouter />;
};

export default AuthRouter;
