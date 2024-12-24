import React from "react";
import { Routes, Route } from "react-router-dom";
import Explore from "../page/Explore";

import RootLayOut from "../layout/RootLayout";
import Notification from "../page/Notification";
import Message from "../page/Message";
import BookMarks from "../page/BookMarks";
import Profile from "../page/Profile";
import HomePage from "../page/HomePage";
import NotFound from "../components/fallback-components/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {/* Main route with nested routes */}
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<HomePage />} /> {/* Default route */}
        <Route path="explore" element={<Explore />} />
        <Route path="notification" element={<Notification />} />
        <Route path="message" element={<Message />} />
        <Route path="bookmark" element={<BookMarks />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
