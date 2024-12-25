import { Routes, Route } from "react-router-dom";
import RootLayOut from "../layout/RootLayout";
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
import NotificationLayout from "../layout/childrenPageLayout/NotificationLayout";
import NotificationPage from "../page/NotificationPage";
import NotifyVerifiedPage from "../page/children-page/notification/NotifyVerifiedPage";
import NotifyMentionPage from "../page/children-page/notification/NotifyMentionPage";
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
        <Route path="notification" element={<NotificationLayout />}>
          <Route index element={<NotificationPage />} />
          <Route path="all-notify" element={<NotificationPage />} />
          <Route path="verified" element={<NotifyVerifiedPage />} />
          <Route path="mentions" element={<NotifyMentionPage />} />
        </Route>
        <Route path="message" element={<Message />} />
        <Route path="bookmark" element={<BookMarks />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
