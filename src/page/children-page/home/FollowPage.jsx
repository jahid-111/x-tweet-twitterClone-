import useAuth from "../../../hooks/useAuth";
import SearchForm from "../../../components/form/SearchForm";
import Subscription from "../../../components/extra/Subscription";
import TrendingCard from "../../../components/SampleToLoad/TrendingCard";
import FollowCard from "../../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../../components/extra/DeveloperIntro";
import NavigationHome from "../../../components/navigate/NavHomeChildren";
import useScrollToVisible from "../../../hooks/useScrollToVisible";
import usePageDocTitle from "../../../hooks/usePageDocTitle";
import useGetFetchData from "../../../hooks/useGetFetchData";
import Loading from "../../../components/fallback-components/Loading";

const FollowPage = () => {
  usePageDocTitle("Twitter © || Follow-page");

  const { authData } = useAuth();
  const { data, isLoading, isError } = useGetFetchData("user");
  const { isVisible } = useScrollToVisible();

  // console.log(authData)
  if (isError) {
    return;
  }

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

          {isLoading && <Loading />}
          {data.map((user, index) => (
            <FollowCard key={index} user={user} auth={authData} />
          ))}
          {isError && <div>Error fetching data. Please try again later.</div>}
          {/* Infinite Scroll Sentinel */}
          <div id="infinite-scroll-sentinel" className="h-3 bg-transparent" />
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block sm:w-[40%] border-gray-700 relative px-1">
          <div className="sticky top-1">
            <SearchForm />
          </div>
          <Subscription />
          <div className="sticky top-14">
            {/* Trending Section */}
            <div className="border border-gray-700 my-4 rounded-xl overflow-hidden">
              <p className="my-2 px-3 text-2xl font-semibold">
                What’s happening!
              </p>
              {[...Array(3)].map((_, i) => (
                <TrendingCard key={i} />
              ))}
            </div>

            {/* Who to Follow Section */}
            <div className="border border-gray-700 my-4 rounded-xl">
              <h3 className="text-2xl mt-3 font-semibold mb-2 px-3">
                Who to follow
              </h3>
              {isLoading && <Loading />}
              {data.slice(0, 3).map((user) => (
                <FollowCard key={user?._id} user={user} auth={authData} />
              ))}
            </div>
            <DeveloperIntro />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default FollowPage;
