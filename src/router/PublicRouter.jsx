import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import AuthPage from "../page/public-page/AuthPage";
import SigninPage from "../page/public-page/SigninPage";
import SignupPage from "../page/public-page/SignupPage";
import useAuth from "../hooks/useAuth";

const PublicRouter = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/auth" element={<PublicLayout />}>
        <Route index element={<AuthPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default PublicRouter;
