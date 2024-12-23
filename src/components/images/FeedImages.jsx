import React from "react";

const FeedImages = ({ tweetMain }) => {
  // console.log("tweet", tweetMain);
  return (
    <div className="w-full">
      <p className="mb-2">
        {tweetMain?.content ?? "On Development #Well done"}
      </p>
      <div className="flex justify-start items-center">
        <img
          alt="tweet-content-image"
          className="w-auto h-auto rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
        />
      </div>
    </div>
  );
};

export default FeedImages;
