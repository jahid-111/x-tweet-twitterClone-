// import { Link } from "react-router-dom";
// import UserShortDetails from "./UserShortDetails";
// import ImageSmall from "../images/ImageSmall";
// import { useState } from "react";
// import Follow from "../feed-card/reaction/Follow";

// const FollowCard = ({ classCustom, user, id, auth }) => {
//   const [isHoveredIndex, setHoveredIndex] = useState(null);

//   console.log(user?.following.includes(auth?.user?.id));

//   return (
//     <div className={`${classCustom} text-white`}>
//       <Link
//         to={`/profile/${user?._id}`}
//         className="flex cursor-pointer justify-between p-3 items-center hover:bg-linkColor h-16 w-full"
//       >
//         <div className="flex gap-3 items-center">
//           <div className="w-12 h-12 rounded-full flex items-center justify-center">
//             <ImageSmall image={user?.profileImage} />
//           </div>
//           {/* onMouse Enter User Short Details */}
//           <div
//             onMouseEnter={() => setHoveredIndex(id)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="flex flex-col relative"
//           >
//             <p className="font-medium hover:underline">{user?.userName}</p>
//             <p className="text-sm text-gray-400">{user?.email}</p>
//             {isHoveredIndex === id && (
//               <div className="absolute top-8 right-28 z-10 bg-gray-900 p-3 rounded-lg shadow-custom">
//                 <UserShortDetails user={user} />
//               </div>
//             )}
//           </div>
//         </div>

//         <Follow user={user} authId={auth?.user?._id} />
//       </Link>
//     </div>
//   );
// };

// export default FollowCard;
import { Link } from "react-router-dom";
import UserShortDetails from "./UserShortDetails";
import ImageSmall from "../images/ImageSmall";
import { useState } from "react";
import Follow from "../feed-card/reaction/Follow";

const FollowCard = ({ classCustom, user, id, auth }) => {
  const [isHoveredIndex, setHoveredIndex] = useState(null);

  // Check if the authenticated user is following this user
  const isFollowing = user?.following?.includes(auth?.user?.id);
  console.log(isFollowing);
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
                <UserShortDetails user={user} />
              </div>
            )}
          </div>
        </div>

        {/* Follow button with dynamic state */}
        <Follow
          user={user}
          authId={auth?.user?._id}
          isFollowing={isFollowing}
        />
      </Link>
    </div>
  );
};

export default FollowCard;
