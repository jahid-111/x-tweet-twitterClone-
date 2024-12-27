import { useState } from "react";
import Subscription from "../components/extra/Subscription";
import FeedCard from "../components/feed-card/FeedCard";
import SearchForm from "../components/form/SearchForm";
import NavHomeChildren from "../components/navigate/NavHomeChildren";
import PostTweet from "../components/tweet-post/PostTweet";
import TrendingCard from "../components/SampleToLoad/TrendingCard";
import FollowCard from "../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../components/extra/DeveloperIntro";
import useAuth from "../hooks/useAuth";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const HomePage = () => {
  const auth = useAuth();

  // State to manage the feed data
  const [feedData, setFeedData] = useState([...Array(20)]);

  // Callback to fetch more data
  const fetchMoreFeedData = async () => {
    setTimeout(() => {
      setFeedData((prev) => [
        ...prev,
        ...Array.from({ length: 5 }, (_, i) => prev.length + i + 1),
      ]);
      resetFetching();
    }, 1000); // Simulate a network delay
  };

  // Use the infinite scroll hook
  const { isFetching, resetFetching } = useInfiniteScroll(fetchMoreFeedData);

  return (
    <div className="w-full flex mx-auto">
      {/* Sticky Sidebar Section */}
      <main className="flex w-full gap-5">
        <section className="w-full md:w-[60%] border-r border-l border-gray-700">
          <NavHomeChildren />
          <PostTweet />
          {feedData.map((_, index) => (
            <FeedCard key={index} />
          ))}
          {isFetching && <div className="loader-infinity mx-auto my-4" />}
          <div id="infinite-scroll-sentinel" className="h-3 bg-transparent" />
        </section>

        <aside className="hidden md:block sm:w-[40%] border-gray-700 relative px-1">
          <div className="sticky top-1">
            <SearchForm />
          </div>
          <Subscription />
          <div className="sticky top-14">
            <TrendingCard classCustom="border border-gray-700 my-4 rounded-xl overflow-hidden" />
            <FollowCard classCustom="border border-gray-700 my-4 rounded-xl" />
            <DeveloperIntro />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomePage;
