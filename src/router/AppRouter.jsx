import { Routes, Route } from "react-router-dom";
import RootLayOut from "../layout/RootLayout";
import Notification from "../page/Notification";
import Message from "../page/Message";
import BookMarks from "../page/BookMarks";
import Profile from "../page/Profile";
import HomePage from "../page/HomePage";
import NotFound from "../components/fallback-components/NotFound";
import ExplorePage from "../page/ExplorePage";
import ExploreLayout from "../layout/childrenPageLayout/ExploreLayout";
import ForYouPage from "../page/children-page/explore/ForYouPage";
import NewsPage from "../page/children-page/explore/NewsPage";
import SportPage from "../page/children-page/explore/SportsPage";
import Entertainment from "../page/children-page/explore/Entertainment";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExploreLayout />}>
          <Route index element={<ExplorePage />} />
          <Route path="for-you" element={<ExplorePage />} />
          <Route path="trending" element={<ForYouPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="sports" element={<SportPage />} />
          <Route path="entertainment" element={<Entertainment />} />
        </Route>
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
