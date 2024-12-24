import { Outlet } from "react-router-dom";

import Footer from "../components/extra/Footer";
const PublicLayout = () => {
  return (
    <div>
      <main className="mx-auto ">
        <Outlet />
      </main>

      <div className="absolute bottom-2 left-0 right-0">
        <Footer />
      </div>
      <div id="modal-root-content"></div>
    </div>
  );
};

export default PublicLayout;
