import Subscription from "../components/extra/Subscription";
import FeedCard from "../components/feed-card/FeedCard";
import SearchForm from "../components/form/SearchForm";
import NavHomeChildren from "../components/navigate/NavHomeChildren";
import PostTweet from "../components/tweet-post/PostTweet";
import TrendingCard from "../components/SampleToLoad/TrendingCard";
import FollowCard from "../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../components/extra/DeveloperIntro";

const HomePage = () => {
  return (
    <div className=" w-full flex mx-auto">
      {/* Sticky Sidebar Section */}
      <main className="flex w-full ">
        <section className="w-full md:w-[60%] border-r border-l border-gray-700">
          <NavHomeChildren />
          <PostTweet />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </section>
        {/* <Outlet /> */}

        <aside className="hidden md:block sm:w-[40%]  border-r border-l border-gray-700 relative px-1">
          <div className="sticky top-1">
            <SearchForm />
          </div>
          <Subscription />

          <TrendingCard classCustom="border border-gray-700 my-4 rounded-xl overflow-hidden" />
          <FollowCard classCustom="border border-gray-700 my-4 rounded-xl" />
          <DeveloperIntro />
        </aside>
      </main>
    </div>
  );
};

export default HomePage;
