import { FaComment } from "react-icons/fa";
import Like from "./reaction/Like";
import useAuth from "../../hooks/useAuth";
import Modal from "../fallback-components/Modal";
import TwitterReplyBox from "./reaction/TwitterReply";
import { useState } from "react";
import { BiRepost } from "react-icons/bi";
import clientApi from "../../../services/axiosAPI_Config";
import Retweet from "./reaction/Retweet";
import { IoStatsChart } from "react-icons/io5";
import { toast } from "react-toastify";

const FeedReaction = ({ tweet }) => {
  const [isToggle, setIsToggle] = useState(false); // Modal toggle state
  const authData = useAuth();

  const commentHandler = (e) => {
    setIsToggle(true); // Open the modal
  };
  //   console.log(tweet?.retweets);
  const closeModal = () => {
    setIsToggle(false); // Close the modal
  };

  const handleClick = (e) => {
    toast.error(" Oops..! This Action not implemented yet!");
  };
  return (
    <>
      <div className="flex items-center gap-5 justify-between w-full">
        {/* COMMENT*/}
        <button
          onClick={(e) => commentHandler(e, tweet._id)}
          className="mx-auto"
        >
          <div className=" flex justify-center items-center">
            <FaComment className="h-7 w-7 my-1 rounded-full p-1 hover:bg-primary" />
            <p>{tweet?.comments.length}</p>
          </div>
        </button>

        <Retweet tweet={tweet} auth={authData} />

        <Like tweet={tweet} auth={authData} />

        {/* REACH*/}
        <button onClick={(e) => handleClick(e)} className="mx-auto">
          <div className=" flex justify-center items-center">
            <IoStatsChart className="h-7 w-7 m-1 rounded-full p-1 hover:bg-primary" />
            <p>
              <span className=" me-[2px]">{tweet?.comments.length}</span>
              <span>k</span>
            </p>
          </div>
        </button>
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
