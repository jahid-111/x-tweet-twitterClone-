import { Link } from "react-router-dom";
import { getTime } from "../../utils/timeFromate";

const FeedAuthor = ({ author }) => {
  // console.log("author FeedUpdate", author.updatedAt);

  return (
    <div className="flex justify-start items-center  gap-6">
      {/* Display author's username and partial email */}
      <p>
        <Link to={`/profile/${author?._id}`}>
          <span>{author?.userName ?? "Mohd. Jahidul Islam"}</span>
        </Link>
        <span className="text-gray-600 ms-2">
          @{author?.author?.email?.split("@")[0] ?? "Jahid"}
        </span>
      </p>

      {/* Separator */}
      <p className="text-sm text-gray-400">{getTime(author?.updatedAt)}</p>
      {/* <span className="text-gray-500"> || </span> */}
    </div>
  );
};

export default FeedAuthor;
