import PublicRouter from "./PublicRouter"; // Public routes
import AppRouter from "./AppRouter";

const AuthRouter = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <AppRouter /> : <PublicRouter />;
};

export default AuthRouter;
