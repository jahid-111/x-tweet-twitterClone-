import FollowCard from "../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../components/extra/DeveloperIntro";
import TrendingCard from "../../components/SampleToLoad/TrendingCard";
import BackButtonRouter from "../../components/navigate/BackButtonRouter";
import FeedCard from "../../components/feed-card/FeedCard";
import Status from "../../components/status-card/Status";
import FeedReaction from "../../components/feed-card/FeedReaction";

const StatusPage = () => {
  return (
    <main className="flex w-full gap-4">
      <section className="w-full md:w-[60%] border-l border-r border-gray-700">
        <div className="sticky top-1 flex border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl">
          <BackButtonRouter />
          <h4 className="px-6 py-3 text-xl font-semibold">Post</h4>
        </div>
        <div className=" my-5"></div>
        <Status />
        {[...Array(0)].map((_, i) => (
          <FeedCard key={i} />
        ))}

        <div className=" border-t border-b mx-3 py-2 border-gray-700">
          <FeedReaction />
        </div>
      </section>

      <aside className="hidden md:block sm:w-[40%]  relative px-1">
        <div className=" sticky top-3">
          <TrendingCard classCustom="border border-gray-700 my-4 rounded-xl overflow-hidden" />
          <FollowCard classCustom="border border-gray-700 my-4 rounded-xl" />
          <DeveloperIntro />
        </div>
      </aside>
    </main>
  );
};

export default StatusPage;
