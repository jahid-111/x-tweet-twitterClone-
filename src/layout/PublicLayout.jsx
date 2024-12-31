import { Outlet } from "react-router-dom";

import Footer from "../components/extra/Footer";
const PublicLayout = () => {
  return (
    <div>
      <h3>LOGIN</h3>
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
