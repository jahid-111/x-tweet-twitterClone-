import ImageSmall from "../images/ImageSmall";

const UserShortDetails = () => {
  //on click action from Parent Link : /profile/id
  return (
    <div className=" w-52 h-auto">
      <div className="flex justify-between items-center">
        {/* User Image */}
        <div className="flex justify-center items-center">
          <ImageSmall />
        </div>
        {/* Follow Button */}
        {/* <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-5 ">
          Follow
        </button> */}
      </div>

      {/* User Info */}
      <div className="flex flex-col  justify-start">
        <strong className="text-xl">Jahid</strong>
        <small className="text-gray-400">@jahid</small>
      </div>

      {/* Bio */}
      <p className="text-start text-gray-300 my-2">Im a developer</p>

      {/* Follower Count */}
      <div className="flex justify-between items-center py-1">
        <p className="text-sm">99 Followers</p>
        <p className="text-sm">44 Following</p>
      </div>
    </div>
  );
};

export default UserShortDetails;
