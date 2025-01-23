import ImageSmall from "../images/ImageSmall";
import { useNavigate } from "react-router-dom";
import FeedImages from "../images/FeedImages";
import FeedReaction from "./FeedReaction";
import FeedMarkShare from "./FeedMarkShare";
import FeedAuthor from "./FeedAuthor";
import { useState } from "react";
import Modal from "../fallback-components/Modal";
import StatusModalPage from "../../page/dynamic-pge/StatusModalPage";

const FeedCard = ({ tweet, tweetPost, singleTweet }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();
  // console.log(tweetPost._id);

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

  return (
    <div
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

        {/* Modal */}
        {isOpenModal && (
          <Modal onClose={() => setIsOpenModal(false)}>
            <StatusModalPage tweetId={tweetPost?._id} />
          </Modal>
        )}

        {/* User Actions */}
        <div className="flex gap-5 justify-between items-center my-1 w-full">
          <FeedReaction tweetId={tweetPost?._id} />
          <FeedMarkShare tweetId={tweetId} />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
