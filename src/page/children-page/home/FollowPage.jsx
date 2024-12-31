import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import PostTweet from "../../../components/tweet-post/PostTweet";
import SearchForm from "../../../components/form/SearchForm";
import Subscription from "../../../components/extra/Subscription";
import TrendingCard from "../../../components/SampleToLoad/TrendingCard";
import FollowCard from "../../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../../components/extra/DeveloperIntro";
import NavigationHome from "../../../components/navigate/NavHomeChildren";
import useScrollToVisible from "../../../hooks/useScrollToVisible";
import usePageDocTitle from "../../../hooks/usePageDocTitle";

const FollowPage = () => {
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
  const { isVisible } = useScrollToVisible();

  return (
    <div className="w-full flex mx-auto">
      {/* Sticky Sidebar Section */}
      <main className="flex w-full gap-5">
        <section className="w-full md:w-[60%] border-r border-l border-gray-700">
          {/* Sticky Navigation Section */}
          <div
            className={`sticky top-1 border-b border-gray-700 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0 backdrop-blur-2xl bg-opacity-80"
                : "opacity-0 -translate-y-full"
            }`}
          >
            <NavigationHome />
          </div>
          {feedData.map((_, index) => (
            <FollowCard key={index} />
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

export default FollowPage;
