import React from "react";
import { postActionItems } from "../../utils/userIconStaticData";

const PostContextIcon = () => {
  function handleContextPostBy(nameOnEmoji, e) {
    e.preventDefault();
    console.log(nameOnEmoji);
  }

  return (
    <div className="flex justify-center items-center h-full">
      <ul className="flex gap-2">
        {postActionItems.map((item, index) => (
          <li key={index} className="flex justify-center items-center">
            <button
              onClick={(e) => handleContextPostBy(item.actionName, e)}
              className="text-[#1DA1F2] hover:bg-gray-800  rounded-full p-2"
            >
              <item.icon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostContextIcon;
