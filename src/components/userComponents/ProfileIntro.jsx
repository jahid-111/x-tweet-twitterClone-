import { ImCalendar } from "react-icons/im";

const ProfileIntro = () => {
  return (
    <div className="mx-auto mb-4 ">
      {/* Header Section */}
      <div className="relative h-full bg-slate-800">
        {/* Cover Photo */}
        <div className="w-full h-full">
          <img
            className=" h-full w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
            alt=""
          />
        </div>
        {/* DP */}
        <div className="absolute bottom-[-3rem] left-6 h-36 w-36 rounded-full border-4 border-transparent">
          <div className="w-full h-full">
            <img
              className=" rounded-full h-full w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className=" flex justify-end items-center m-2">
        <button className="border border-gray-700 hover:bg-gray-700 py-2 px-5 rounded-full">
          Edit Profile
        </button>
      </div>

      <div className=" px-3">
        <div className=" flex flex-col justify-start mb-3">
          <p className="text-[1.3rem] font-semibold"> Jahid</p>
          <p className="text-sm text-gray-500">@jahidjob</p>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className=" flex gap-2 justify-start items-center mt-2 text-sm text-gray-500">
              <ImCalendar /> Joined February 2015
            </p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <p>
              <span className="font-semibold"> 99</span>
              <span className=" text-sm text-gray-500"> Following</span>
            </p>
            <p>
              <span className="font-semibold">7</span>
              <span className=" text-sm text-gray-500"> Follower</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
