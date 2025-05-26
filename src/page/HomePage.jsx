import Subscription from "../components/extra/Subscription";
import FeedCard from "../components/feed-card/FeedCard";
import SearchForm from "../components/form/SearchForm";
import PostTweet from "../components/tweet-post/PostTweet";
import TrendingCard from "../components/SampleToLoad/TrendingCard";
import FollowCard from "../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../components/extra/DeveloperIntro";
import NavigationHome from "../components/navigate/NavHomeChildren";
import useScrollToVisible from "../hooks/useScrollToVisible";
import usePageDocTitle from "../hooks/usePageDocTitle";

import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Loading from "../components/fallback-components/Loading";
import useGetFetchTweet from "../hooks/API/useGetFetchTweet";
import useGetFetchUser from "../hooks/API/useGetFetchUser";

const HomePage = () => {
  usePageDocTitle("Twitter © || Home");

  const { isVisible } = useScrollToVisible();

  const { authData } = useAuth();

  const { tweets, isLoadingTweets } = useGetFetchTweet("tweet");
  const { users, isLoadingUser } = useGetFetchUser("user");

  // console.log(data[0]);

  // console.log("all tweet", users);
  return (
    <div className="w-full flex mx-auto">
      {/* Sticky Sidebar Section */}
      <main className="flex w-full gap-5">
        <section className="w-full md:w-[60%] border-r border-l border-gray-700">
          {/* Sticky Navigation Section */}
          <div
            className={`sticky top-1 transition-all duration-500 border-b border-gray-700 ${
              isVisible
                ? "opacity-100 translate-y-0 backdrop-blur-2xl bg-opacity-80"
                : "opacity-0 -translate-y-full"
            }`}
          >
            <NavigationHome />
          </div>

          {/* Main Content */}
          <PostTweet />

          {isLoadingTweets ? (
            <Loading />
          ) : (
            tweets.map((tweetPost) => (
              <FeedCard
                key={tweetPost._id}
                tweetPost={tweetPost}
                auth={authData}
              />
            ))
          )}
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block sm:w-[40%] border-gray-700 relative px-1">
          <div className="sticky top-1">
            <SearchForm />
          </div>
          <Subscription />
          <div className="sticky top-14">
            {/* TRENDING Data Sample */}
            <div className="border border-gray-700 my-4 rounded-xl overflow-hidden">
              <p className="my-2 px-3 text-2xl font-semibold">
                What’s happening!
              </p>
              {[...Array(3)].map((_, i) => (
                <TrendingCard key={i} />
              ))}
            </div>

            {/* FOLLOWING Data Sample */}
            <div className="border border-gray-700 my-4 rounded-xl">
              <h3 className="text-2xl mt-3 font-semibold mb-2 px-3">
                Who to follow
              </h3>
              {isLoadingUser ? (
                <Loading />
              ) : (
                users
                  .slice(0, 3)
                  .slice(0, 4)
                  ?.map((user, i) => <FollowCard key={i} id={i} user={user} />)
              )}
              <Link
                to="/following"
                className="ms-4 text-sm text-gray-400 hover:text-blue-500"
              >
                More...e
              </Link>
            </div>
            <DeveloperIntro />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomePage;
