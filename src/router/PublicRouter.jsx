import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../components/fallback-components/NotFound";
import PublicLayout from "../layout/PublicLayout";
import AuthPage from "../page/public-page/AuthPage";
import SigninPage from "../page/public-page/SigninPage";
import SignupPage from "../page/public-page/SignupPage";

const PublicRouter = () => {
  const isAuthenticated = false; // Replace with your actual authentication logic

  if (isAuthenticated) {
    // Redirect authenticated users to the home page
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      {/* Public Layout with Nested Routes */}
      <Route path="/auth" element={<PublicLayout />}>
        <Route index element={<AuthPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      {/* Catch-all for invalid public routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
