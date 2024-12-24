import React from "react";
import { Outlet } from "react-router-dom"; // Make sure to import Outlet
import SearchForm from "../components/form/SearchForm";
import NavigationExplore from "../components/navigate/ExploreNavigate";
import FollowCard from "../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../components/extra/DeveloperIntro";
const ExplorePage = () => {
  return (
    <div className="w-full flex mx-auto">
      {/* Sticky Sidebar Section */}
      <main className="flex w-full">
        <section className="w-full md:w-[60%] border-r border-l border-gray-700">
          <div className="sticky top-1">
            <SearchForm />
          </div>
          <NavigationExplore />
          <Outlet />
          {/* Renders the content of child routes like /explore/trending */}
        </section>

        {/* This is where the child routes will be rendered */}

        <aside className="hidden md:block sm:w-[40%] border-r border-l border-gray-700 relative px-1">
          <FollowCard classCustom="border border-gray-700 my-4 rounded-xl" />
          <DeveloperIntro />
        </aside>
      </main>
    </div>
  );
};

export default ExplorePage;
