import { useNavigate } from "react-router-dom";
import { getTime } from "../../utils/timeFromate";

const FeedAuthor = ({ author, info }) => {
  // console.log("author FeedUpdate", info.author?._id);
  const navigate = useNavigate();

  function handleAuthorClick(e) {
    navigate(`/profile/${info?.author?._id}`);
    e.stopPropagation(); // Prevent event bubbling
  }
  if (!info?.author) {
    return null; // Return null if author information is not available
  }

  return (
    <button
      onClick={handleAuthorClick}
      type="button"
      to={`/profile/${info?.author?._id}`}
      className="flex justify-start items-center gap-6"
    >
      {/* Display author's username and partial email */}
      <p>
        <span>{info.author?.userName ?? "Mohd. Jahidul Islam"}</span>

        {/* <span className="text-gray-600 ms-2">{info?.author?.email}</span> to do  */}
      </p>

      {/* Separator */}
      <p className="text-sm text-gray-400">{getTime(info?.updatedAt)}</p>
    </button>
  );
};

export default FeedAuthor;
