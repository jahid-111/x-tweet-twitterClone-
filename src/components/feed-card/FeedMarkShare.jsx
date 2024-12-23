import React from "react";
import { sideActionItems } from "../../utils/userIconStaticData";

const FeedMarkShare = ({ tweetId }) => {
  function handleMarkShareBy(name, tweetId) {
    console.log(name, tweetId);
  }

  return (
    <div className="flex gap-2 justify-end w-3/12">
      {sideActionItems.map((item, i) => (
        <div key={i} className="flex justify-evenly items-center">
          <button
            onClick={() => handleReactionBy(item.name, tweetId)}
            className="mx-auto"
          >
            <item.icon className="h-6 w-6 my-1 rounded-full p-1 hover:bg-primary" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeedMarkShare;
