import { FaComment } from "react-icons/fa";
import Like from "./reaction/Like";
import useAuth from "../../hooks/useAuth";
import Modal from "../fallback-components/Modal";
import TwitterReplyBox from "./reaction/TwitterReply";
import { useState } from "react";

const FeedReaction = ({ tweet }) => {
  const [isToggle, setIsToggle] = useState(false); // Modal toggle state
  const authData = useAuth();

  const commentHandler = (e) => {
    e.stopPropagation();
    setIsToggle(true); // Open the modal
  };

  const closeModal = () => {
    setIsToggle(false); // Close the modal
  };

  return (
    <>
      <div className="flex items-center gap-5 justify-between w-full">
        {/* Comment Button */}
        <button
          onClick={(e) => commentHandler(e, tweet._id)}
          className="mx-auto"
        >
          <div className=" flex justify-center items-center">
            <FaComment className="h-7 w-7 my-1 rounded-full p-1 hover:bg-primary" />
            <p>{tweet?.comments.length}</p>
          </div>
        </button>

        {/* Like Button */}
        <Like tweet={tweet} auth={authData} />
      </div>
      {/* Modal with TwitterReplyBox */}
      {isToggle && (
        <Modal modalTitle="Comment Reply" onClose={closeModal}>
          <div className=" w-96 md:w-[35rem]">
            <TwitterReplyBox tweet={tweet} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default FeedReaction;
