import { Outlet } from "react-router-dom";
import FollowCard from "../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../components/extra/DeveloperIntro";
import NavNotification from "../../components/navigate/NavNotification";
import TrendingCard from "../../components/SampleToLoad/TrendingCard";
import usePageDocTitle from "../../hooks/usePageDocTitle";

const NotificationLayout = () => {
  usePageDocTitle("Twitter © || Notification");
  return (
    <main className="flex w-full gap-4">
      <section className="w-full md:w-[60%] border-l border-r border-gray-700">
        <div className="sticky top-1 border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl">
          <h4 className="px-6 py-3 text-xl font-semibold">Notification</h4>
          <NavNotification />
        </div>
        <Outlet />
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

export default NotificationLayout;
