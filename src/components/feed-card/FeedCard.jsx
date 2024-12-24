import ImageSmall from "../images/ImageSmall";
import { Link, useNavigate } from "react-router-dom";

import FeedImages from "../images/FeedImages";
import FeedReaction from "./FeedReaction";
import FeedMarkShare from "./FeedMarkShare";
import FeedAuthor from "./FeedAuthor";

const FeedCard = ({ tweet, singleTweet }) => {
  const navigate = useNavigate();
  const dataTweet = tweet ?? singleTweet;
  const tweetId = dataTweet?._id;

  // Navigate to the tweet's page
  const navigateToStatusPage = () => {
    navigate(`/status/${tweetId}`);
  };

  return (
    <div
      className="hover:bg-linkColor cursor-pointer flex gap-2 w-full p-1 border-b border-gray-600 pt-2"
      onClick={navigateToStatusPage}
    >
      {/* User Profile Image */}
      <div className="w-1/12">
        <ImageSmall />
      </div>

      {/* Tweet Content */}
      <div className="w-11/12">
        {/* Tweet Author Information */}
        <FeedAuthor author={dataTweet} />

        {/* Tweet Main Content */}
        <div onClick={(e) => e.stopPropagation()}>
          <Link to={`/status/${tweetId}/modalphoto`}>
            <FeedImages images={dataTweet?.images} />
          </Link>
        </div>

        {/* User Actions */}
        <div className="flex gap-5 justify-between items-center my-1 w-full">
          <FeedReaction reactions={dataTweet?.reactions} />
          {/* Uncomment below if FeedMarkShare is required */}
          <FeedMarkShare tweetId={tweetId} />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
