import ImageSmall from "../images/ImageSmall";
import { useNavigate } from "react-router-dom";
import FeedImages from "../images/FeedImages";
import FeedReaction from "./FeedReaction";
import FeedMarkShare from "./FeedMarkShare";
import FeedAuthor from "./FeedAuthor";
import { useState } from "react";
import Modal from "../fallback-components/Modal";
import StatusModalPage from "../../page/dynamic-pge/StatusModalPage";
import TweetCustomize from "./TweetCustomize";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const FeedCard = ({ tweet, tweetPost, singleTweet, auth }) => {
  // console.log(auth?.user._id)
  // console.log(tweet);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [options, setOptions] = useState({ dots: false, options: false });
  const navigate = useNavigate();

  // console.log(tweetPost);

  const dataTweet = tweet ?? singleTweet;
  const tweetId = dataTweet?._id;

  // Handle Modal (Prevent event propagation on button click)
  const handleModal = (e) => {
    e.stopPropagation(); // Prevent event bubbling for modal open
    setIsOpenModal((prev) => !prev);
  };

  // Navigate to the tweet's page only when the modal is closed
  const navigateToStatusPage = () => {
    if (!isOpenModal) {
      navigate(`/status/${tweetId}`);
    }
  };

  // console.log(tweetPost?.author._id);

  const isAuthor = tweetPost?.author?._id === auth?.user?._id;
  // console.log(isAuthor);
  return (
    <div
      onMouseEnter={() => setOptions({ ...{ dots: true } })}
      onMouseLeave={() => setOptions({ ...{ dots: false } })}
      onClick={navigateToStatusPage} // Navigate to tweet page when the card is clicked
      className="hover:bg-linkColor cursor-pointer flex gap-2 w-full p-1 border-b border-gray-600 pt-2"
    >
      {/* User Profile Image */}
      <div className="w-1/12">
        <ImageSmall />
      </div>

      {/* Tweet Content */}
      <div className="w-11/12">
        {/* Tweet Author Information */}
        <FeedAuthor author={tweetPost?.author} />

        {/* Tweet Main Content */}
        <button onClick={handleModal}>
          {" "}
          {/* Toggling modal on click */}
          <FeedImages tweet={tweetPost} images={dataTweet?.images} />
        </button>

        {isOpenModal && (
          <Modal onClose={() => setIsOpenModal(false)}>
            <StatusModalPage tweetId={tweetPost?._id} />
          </Modal>
        )}

        {/* User Actions */}
        <div
          onClick={(e) => {
            e.stopPropagation(); // Properly stops the event propagation
          }}
          className="flex gap-5 justify-between items-center my-1 w-full"
        >
          <FeedReaction tweet={tweetPost} />
          <FeedMarkShare tweetId={tweetId} />
        </div>
      </div>

      {/* IF THIS CONTENT USER MINE */}
      {isAuthor && options.dots && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute right-2 top-2"
        >
          <button
            onClick={() =>
              setOptions((prev) => ({
                ...prev,
                options: !prev.options,
              }))
            }
            className="bg-gray-600 hover:bg-gray-500 p-2 rounded-full"
          >
            <PiDotsThreeOutlineFill className="h-3 w-3" />
          </button>
        </div>
      )}
      {options.options && (
        <TweetCustomize tweet={tweetPost} auth={auth?.user._id} />
      )}
    </div>
  );
};

export default FeedCard;
