import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import RootLoader from "./components/fallback-components/RootLoader";

function App() {
  return (
    <Router>
      <Suspense fallback={<RootLoader />}>
        <AppRouter />
      </Suspense>
    </Router>
  );
}

export default App;
