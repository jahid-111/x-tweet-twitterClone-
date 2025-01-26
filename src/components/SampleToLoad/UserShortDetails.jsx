import ImageSmall from "../images/ImageSmall";

const UserShortDetails = ({ user }) => {
  //on click action from Parent Link : /profile/id

  // console.log(user);
  return (
    <div className=" w-52 h-auto">
      <div className="flex justify-between items-center">
        {/* User Image */}
        <div className="flex justify-center items-center">
          <ImageSmall image={user?.profileImage} />
        </div>
      </div>

      {/* User Info */}
      <div className="flex flex-col  justify-start">
        <strong className="text-xl">{user?.userName}</strong>
        <small className="text-gray-400">{user?.email}</small>
      </div>

      {/* Bio */}
      <p className="text-start text-gray-300 my-2">Im a developer</p>

      {/* Follower Count */}
      <div className="flex justify-between items-center py-1">
        <p className="text-sm">{user?.followers.length} Followers</p>
        <p className="text-sm"> {user?.following.length} Following</p>
      </div>
    </div>
  );
};

export default UserShortDetails;
