import { Outlet } from "react-router-dom";
import FollowCard from "../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../components/extra/DeveloperIntro";
import TrendingCard from "../../components/SampleToLoad/TrendingCard";
import ProfileNavigation from "../../components/navigate/ProfileNavigation";
import SearchForm from "../../components/form/SearchForm";
import Subscription from "../../components/extra/Subscription";
import ProfileIntro from "../../components/userComponents/ProfileIntro";
import BackButtonRouter from "../../components/navigate/BackButtonRouter";
import usePageDocTitle from "../../hooks/usePageDocTitle";

const ProfileLayout = () => {
  usePageDocTitle("Twitter © || Profile-Mohd");
  return (
    <main className="flex w-full gap-4">
      <section className="w-full md:w-[60%] border-l border-r border-gray-700">
        <div className="sticky top-0 flex border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl">
          <BackButtonRouter />
          <h4 className="px-6 py-3 text-xl font-semibold">
            Mohd. Jahidul Islam ( 5 Posts )
          </h4>
          {/* <ProfileNavigation /> */}
        </div>
        <ProfileIntro />
        <div className="sticky top-14 border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl">
          <ProfileNavigation />
        </div>

        <Outlet />
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
  );
};

export default ProfileLayout;
