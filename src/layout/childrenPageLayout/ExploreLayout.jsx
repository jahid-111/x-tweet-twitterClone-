import SearchForm from "../../components/form/SearchForm";
import NavigationExplore from "../../components/navigate/ExploreNavigate";
import { Outlet } from "react-router-dom";
import FollowCard from "../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../components/extra/DeveloperIntro";

const ExploreLayout = () => {
  return (
    <main className="flex w-full gap-4">
      <section className="w-full md:w-[60%] border-l border-r border-gray-700">
        <div className="sticky top-1 border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl ">
          <div className="px-6">
            <SearchForm />
          </div>
          <NavigationExplore />
        </div>

        <Outlet />
        {/* Child routes content like /explore/trending will be rendered here */}
      </section>

      <aside className="hidden md:block sm:w-[40%]  relative px-1">
        <div className=" sticky top-3">
          <FollowCard classCustom="border border-gray-700 my-4 rounded-xl" />
          <DeveloperIntro />
        </div>
      </aside>
    </main>
  );
};

export default ExploreLayout;
