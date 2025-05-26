import { Outlet, useParams } from "react-router-dom";
import FollowCard from "../../components/SampleToLoad/FollowCard";
import DeveloperIntro from "../../components/extra/DeveloperIntro";
import TrendingCard from "../../components/SampleToLoad/TrendingCard";
import ProfileNavigation from "../../components/navigate/ProfileNavigation";
import SearchForm from "../../components/form/SearchForm";
import Subscription from "../../components/extra/Subscription";
import ProfileIntro from "../../components/userComponents/ProfileIntro";
import BackButtonRouter from "../../components/navigate/BackButtonRouter";
import usePageDocTitle from "../../hooks/usePageDocTitle";
import useAuth from "../../hooks/useAuth";
import useGetFetchData from "../../hooks/useGetFetchData";
import Loading from "../../components/fallback-components/Loading";

const ProfileLayout = () => {
  usePageDocTitle("Twitter © || Profile-Mohd");
  const { id } = useParams();

  const { authData } = useAuth();
  const authId = authData?.user?._id;

  // ✅ Ensure that `profile` gets the correct id value
  const profile = authId && id;
  // console.log(profile);

  const { data, isLoading } = useGetFetchData(`/user/${profile}`);

  const { tweets, user } = data;
  // console.log(data.tweets);

  return (
    <main className="flex w-full gap-4">
      <section className="w-full md:w-[60%] border-l border-r border-gray-700">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="sticky top-0 flex border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl">
              <BackButtonRouter />
              <h4 className="px-6 py-3 text-xl font-semibold">
                {user?.userName} ({tweets?.length} Posts )
              </h4>
            </div>
            <ProfileIntro profile={user} />
            <div className="sticky top-14 border-b border-gray-700 w-full bg-opacity-80 backdrop-blur-2xl">
              <ProfileNavigation id={profile} />
            </div>

            {/* Pass data to the Outlet using the context prop */}
            <Outlet context={data?.tweets} />
          </>
        )}
      </section>

      <aside className="hidden md:block sm:w-[40%] border-gray-700 relative px-1">
        <div className="sticky top-1">
          <SearchForm />
        </div>
        <Subscription />
        <div className="sticky top-14">
          <div className="border border-gray-700 my-4 rounded-xl overflow-hidden">
            <p className="my-2 px-3 text-2xl font-semibold">
              What’s happening!
            </p>
            {[...Array(3)].map((_, i) => (
              <TrendingCard key={i} />
            ))}
          </div>

          <div className="border border-gray-700 my-4 rounded-xl">
            <h3 className="text-2xl mt-3 font-semibold mb-2 px-3">
              Who to follow
            </h3>
          </div>
          <DeveloperIntro />
        </div>
      </aside>
    </main>
  );
};

export default ProfileLayout;
