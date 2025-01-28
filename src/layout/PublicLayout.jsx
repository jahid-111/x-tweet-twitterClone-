import { Outlet } from "react-router-dom";

import Footer from "../components/extra/Footer";
import useAuth from "../hooks/useAuth";
const PublicLayout = () => {
  const isAuthenticated = useAuth();
  // console.log(isAuthenticated);
  return (
    <div>
      <main className="mx-auto ">
        <Outlet />
      </main>

      <div className="absolute bottom-2 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
