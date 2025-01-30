import { ImCalendar } from "react-icons/im";
import { getTime } from "../../utils/timeFormate";

const ProfileIntro = ({ profile }) => {
  // console.log(profile?.followers?.length);

  return (
    <div className="mx-auto mb-4">
      {/* Header Section */}
      <div className="relative h-full bg-slate-800">
        {/* Cover Photo */}
        <div className="w-full h-full">
          <img
            className="h-full w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
            alt="Cover"
          />
        </div>
        {/* Profile Picture */}
        <div className="absolute bottom-[-3rem] left-6 h-36 w-36 rounded-full border-4 border-transparent">
          <div className="w-full h-full">
            <img
              className="rounded-full h-full w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-end items-center m-2">
        <button className="border border-gray-700 hover:bg-gray-700 py-2 px-5 rounded-full">
          Edit Profile
        </button>
      </div>

      {/* User Info */}
      <div className="px-3">
        <div className="flex flex-col justify-start mb-3">
          <p className="text-[1.3rem] font-semibold">{profile?.userName}</p>
          <p className="text-sm text-gray-500">{profile?.email}</p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Joined Date & Time */}
          <div>
            <p className="flex gap-2 justify-start items-center mt-2 text-sm text-gray-500">
              <ImCalendar /> {getTime(profile?.updatedAt)}
            </p>
          </div>

          {/* Followers & Following */}
          <div className="flex justify-start items-center gap-3">
            <p>
              <span className="font-semibold">
                {profile?.following?.length || 0}
              </span>
              <span className="text-sm text-gray-500"> Following</span>
            </p>
            <p>
              <span className="font-semibold">
                {profile?.followers?.length || 0}
              </span>
              <span className="text-sm text-gray-500"> Followers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
