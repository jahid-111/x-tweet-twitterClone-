import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/fallback-components/NotFound";
import PublicLayout from "../layout/PublicLayout";
import AuthPage from "../page/public-page/AuthPage";
import SigninPage from "../page/public-page/SigninPage";
import SignupPage from "../page/public-page/SignupPage";
import useAuth from "../hooks/useAuth";

const PublicRouter = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  // If the user is authenticated, redirect to the home page (or anywhere else)
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
