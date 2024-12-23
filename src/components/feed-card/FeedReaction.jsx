import React from "react";
import { actionItems } from "../../utils/userIconStaticData";

const FeedReaction = ({ tweetId }) => {
  console.log(tweetId);
  // const router = useRouteError();

  function handleReactionBy(name, tweetId) {
    console.log(name, tweetId);

    if (name === "comments") {
      // router.push(`/compose/comment-reply/${tweetId}`);
      console.log(tweetId);
    } else if (name === "like") {
      window.alert("liked");
    } else if (name === "repost") {
      window.prompt("are u sure ??");
    } else if (name == "chart") {
      window.alert("Oops....!! ");
    }
  }

  return (
    <div className="flex items-center gap-5 justify-between w-9/12    ">
      {actionItems.map((item, i) => (
        <div key={i} className="flex justify-center items-center">
          <button
            onClick={() => handleReactionBy(item.name, tweetId)}
            className="mx-auto"
          >
            <item.icon className="h-6 w-6 my-1 rounded-full p-1 hover:bg-primary" />
          </button>
          <p className="text-sm text-gray-500 ms-1">99</p>
        </div>
      ))}
    </div>
  );
};

export default FeedReaction;
