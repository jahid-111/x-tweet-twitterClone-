import SearchForm from "../../components/form/SearchForm";
import NavigationExplore from "../../components/navigate/ExploreNavigate";
import { Outlet } from "react-router-dom";
import FollowCard from "../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../components/extra/DeveloperIntro";
import usePageDocTitle from "../../hooks/usePageDocTitle";

const ExploreLayout = () => {
  usePageDocTitle("Twitter © || Explore");

  const users = [
    { name: "Mohd. Jahidul Islam", title: "Full-Stack Developer" },
    { name: "Jane Doe", title: "Developer" },
    { name: "John Smith", title: "Designer" },
  ];

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
          <div className="border border-gray-700 my-4 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 px-3">Who to follow</h3>
            {users.map((user, i) => (
              <FollowCard key={i} id={i} user={user} />
            ))}
          </div>
          <DeveloperIntro />
        </div>
      </aside>
    </main>
  );
};

export default ExploreLayout;
