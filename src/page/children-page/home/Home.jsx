import React, { useState } from "react";
import PostTweet from "../../../components/tweet-post/PostTweet";
import FeedCard from "../../../components/feed-card/FeedCard";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

export default function Home() {
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
    <div>
      <section className="w-full md:w-[60%] border-r border-l border-gray-700">
        <PostTweet />
        {feedData.map((_, index) => (
          <FeedCard key={index} />
        ))}
        {isFetching && <div className="loader-infinity mx-auto my-4" />}
        <div id="infinite-scroll-sentinel" className="h-3 bg-transparent" />
      </section>
    </div>
  );
}
