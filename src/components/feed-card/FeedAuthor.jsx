import { Link } from "react-router-dom";
import { getTime } from "../../utils/timeFormate";

const FeedAuthor = ({ author, info }) => {
  // console.log("author FeedUpdate", info.author);

  return (
    <div className="flex justify-start items-center  gap-6">
      {/* Display author's username and partial email */}
      <p>
        <Link to={`/profile/${author?._id}`}>
          <span>{info.author?.userName ?? "Mohd. Jahidul Islam"}</span>
        </Link>
        <span className="text-gray-600 ms-2">{info?.author?.email}</span>
      </p>

      {/* Separator */}
      <p className="text-sm text-gray-400">{getTime(info?.updatedAt)}</p>
    </div>
  );
};

export default FeedAuthor;
