import { Link } from "react-router-dom";
import UserShortDetails from "./UserShortDetails";
import ImageSmall from "../images/ImageSmall";
import { useState } from "react";
import Follow from "../feed-card/reaction/Follow";

const FollowCard = ({ classCustom, user, id, auth }) => {
  const [isHoveredIndex, setHoveredIndex] = useState(null);

  // Track follow state and follower count
  const [follow, setFollow] = useState({
    isFollowing: user?.followers.includes(auth?.user._id), // Is this user followed?
    followCount: user?.followers.length, // Number of followers
  });

  // Function to handle follow/unfollow and update the state
  const handleFollowChange = (isFollowing) => {
    setFollow((prev) => ({
      isFollowing: isFollowing,
      followCount: prev.followCount + (isFollowing ? 1 : -1), // Update the count (+1 or -1)
    }));
  };

  // console.log(follow);
  return (
    <div className={`${classCustom} text-white`}>
      <Link
        to={`/profile/${user?._id}`}
        className="flex cursor-pointer justify-between p-3 items-center hover:bg-linkColor h-16 w-full"
      >
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <ImageSmall image={user?.profileImage} />
          </div>

          {/* onMouseEnter for user details hover */}
          <div
            onMouseEnter={() => setHoveredIndex(id)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col relative"
          >
            <p className="font-medium hover:underline">{user?.userName}</p>
            <p className="text-sm text-gray-400">{user?.email}</p>

            {/* Conditionally render user details on hover */}
            {isHoveredIndex === id && (
              <div className="absolute top-8 right-28 z-10 bg-gray-900 p-3 rounded-lg shadow-custom">
                <UserShortDetails
                  user={user}
                  followCount={follow?.followCount}
                />
              </div>
            )}
          </div>
        </div>

        {/* Follow button with dynamic state */}
        <Follow
          user={user}
          authId={auth?.user?._id}
          isFollowing={follow?.isFollowing}
          followCount={follow?.followCount}
          onFollowChange={handleFollowChange} // Pass state updater to Follow component
        />
      </Link>
    </div>
  );
};

export default FollowCard;
