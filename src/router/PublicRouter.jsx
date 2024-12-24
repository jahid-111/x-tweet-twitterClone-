import { Routes, Route, Navigate } from "react-router-dom";
import SigninForm from "../page/public-page/Login";
import NotFound from "../components/fallback-components/NotFound";

const PublicRouter = () => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth" element={<SigninForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRouter;
