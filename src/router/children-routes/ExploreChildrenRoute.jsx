import React from "react";
import { Route, Routes } from "react-router-dom";

const ExploreChildrenRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<h3 className="h-screen border text-red-800">Explore Home</h3>}
    />
    <Route
      path="for-you"
      element={
        <h3 className="h-screen border text-red-800">Explore For you</h3>
      }
    />
    <Route
      path="trending"
      element={<h3 className="h-screen border text-red-800">Trending</h3>}
    />
    <Route
      path="news"
      element={<h3 className="h-screen border text-red-800">News</h3>}
    />
    <Route
      path="Sports"
      element={<h3 className="h-screen border text-red-800">Sports</h3>}
    />
    <Route
      path="entertainment"
      element={<h3 className="h-screen border text-red-800">entertainment</h3>}
    />
  </Routes>
);

export default ExploreChildrenRoutes;
