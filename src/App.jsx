import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RootLoader from "./components/fallback-components/RootLoader";
import { AuthProvider } from "./context/AuthContext";
import AuthRouter from "./router/AuthRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<RootLoader />}>
          <AuthRouter />
        </Suspense>
        {/* Add ToastContainer here to enable toast notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
