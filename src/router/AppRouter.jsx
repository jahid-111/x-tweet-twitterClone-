import { Routes, Route, Navigate } from "react-router-dom";
import RootLayOut from "../layout/RootLayout";
import BookMarks from "../page/BookMarks";

// Pages - ***
import NotFound from "../components/fallback-components/NotFound";
// ROOT HOME PAGE
import HomePage from "../page/HomePage";
import FollowPage from "../page/children-page/home/FollowPage";
// Pages - EXPLORE
import ExplorePage from "../page/ExplorePage";
import ExploreLayout from "../layout/childrenPageLayout/ExploreLayout";
import ForYouPage from "../page/children-page/explore/ForYouPage";
import NewsPage from "../page/children-page/explore/NewsPage";
import SportPage from "../page/children-page/explore/SportsPage";
import Entertainment from "../page/children-page/explore/Entertainment";
// Pages - NOTIFICATION
import NotificationLayout from "../layout/childrenPageLayout/NotificationLayout";
import NotificationPage from "../page/NotificationPage";
import NotifyVerifiedPage from "../page/children-page/notification/NotifyVerifiedPage";
import NotifyMentionPage from "../page/children-page/notification/NotifyMentionPage";
// Pages - MESSAGE
import MessageLayout from "../layout/childrenPageLayout/MessageLayout";
import ChatToUserPage from "../page/children-page/message/ChatToUserPage";
// Pages - PROFILE
import ProfileLayout from "../layout/childrenPageLayout/ProfileLayout";
import PostsProfilePage from "../page/children-page/profile/PostsProfilePage";
import ReplyPage from "../page/children-page/profile/ReplyPage";
import HighlightsPage from "../page/children-page/profile/HighlightsProfilePage";
import ArticlePage from "../page/children-page/profile/ArticlesProfilePage";
import MediaPage from "../page/children-page/profile/MediaProfilePage";
// Pages - DYNAMIC
import StatusPage from "../page/dynamic-pge/StatusPage";
import useAuth from "../hooks/useAuth";

const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* If not authenticated, redirect to /auth */}
      {!isAuthenticated ? (
        <Route path="*" element={<Navigate to="/auth" replace />} />
      ) : (
        <Route path="/" element={<RootLayOut />}>
          {/* Default Landing Page */}
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="following" element={<FollowPage />} />
          {/* DYNAMIC INDIVIDUAL Route */}
          <Route path="status/:id" element={<StatusPage />} />
          {/* -------------------------------- */}
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
          <Route path="message" element={<MessageLayout />}>
            <Route path=":id" element={<ChatToUserPage />} />
          </Route>
          <Route path="bookmark" element={<BookMarks />} /> {/*OPTION PAGE*/}
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<PostsProfilePage />} />
            <Route path="posts" element={<PostsProfilePage />} />
            <Route path="replies" element={<ReplyPage />} />
            <Route path="highlights" element={<HighlightsPage />} />
            <Route path="articles" element={<ArticlePage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
