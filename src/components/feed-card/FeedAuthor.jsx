import React from "react";

const FeedAuthor = ({ author }) => {
  // console.log("author FeedUpdate", author.updatedAt);

  // Handle formatted date safely
  const formattedDate = author?.updatedAt
    ? formateTimeStamps(author.updatedAt)
    : "Once a  time";

  return (
    <div className="flex gap-2">
      {/* Display author's username and partial email */}
      <p>
        <span>{author?.userName ?? "Mohd. Jahidul Islam"}</span>
        <span className="text-gray-600 ms-2">
          @{author?.author?.email?.split("@")[0] ?? "Jahid"}
        </span>
      </p>

      {/* Separator */}
      <span className="text-gray-500"> || </span>

      {/* Display formatted date */}
      <p className="text-gray-600">{formattedDate}</p>
    </div>
  );
};

export default FeedAuthor;
