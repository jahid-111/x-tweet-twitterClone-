import React, { useState } from "react";

import { Link } from "react-router-dom";

import UserShortDetails from "./UserShortDetails";
import ImageSmall from "../images/ImageSmall";

const FollowCard = ({ classCustom }) => {
  const [isHoveredIndex, setHoveredIndex] = useState(null);

  const handleUserFollow = (e) => {
    e.preventDefault();
    window.alert("Followed");
  };

  const users = [
    { name: "Name1", title: "Title1: @HelloWorld1" },
    { name: "Name2", title: "Title2: @HelloWorld2" },
    { name: "Name2", title: "Title2: @HelloWorld3" },
  ];

  // console.log(isHoveredIndex);
  return (
    <div className={classCustom}>
      <h3 className="text-xl font-semibold mb-2 px-3">Who to follow</h3>

      {users.map((user, index) => (
        <Link
          key={index}
          to="/profile"
          className="flex cursor-pointer justify-between p-3 items-center hover:bg-linkColor h-16 w-full "
        >
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white">
              <ImageSmall />
            </div>
            {/* onMouse Enter User Short Details */}
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col relative"
            >
              <p className="font-medium text-xl hover:underline">{user.name}</p>
              <p className="text-sm text-gray-400">{user.title}</p>
              {isHoveredIndex === index && (
                <div className="absolute top-8 right-28 z-10 bg-gray-900 p-3 rounded-lg shadow-custom">
                  <UserShortDetails />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleUserFollow}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full px-5 py-1"
          >
            Follow
          </button>
        </Link>
      ))}
    </div>
  );
};

export default FollowCard;
