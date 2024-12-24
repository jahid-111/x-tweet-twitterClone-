import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RootLoader from "./components/fallback-components/RootLoader";
import { AuthProvider } from "./context/AuthContext";
import AuthRouter from "./router/AuthRouter";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<RootLoader />}>
          <AuthRouter />
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
