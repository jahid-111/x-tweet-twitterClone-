import { BiRepost } from "react-icons/bi";
import clientApi from "../../../../services/axiosAPI_Config";
import { toast, ToastContainer } from "react-toastify";

export default function Retweet({ tweet, auth }) {
  const repostHandler = async (e, id) => {
    e.stopPropagation();

    const payload = {
      userId: auth?.authData.user._id,
      tweetId: id,
    };

    const confirmed = window.confirm("Are you sure you want to repost?");

    if (confirmed) {
      try {
        const response = await clientApi.post(`tweet/${id}/retweet`, {
          payload,
        });

        if (response.status === 200) {
          toast.success("Retweet successful! 🎉"); // Display success toast
          //   console.log("ReTweet response:", response);
        }
      } catch (error) {
        toast.error("Error while retweeting. Please try again."); // Display error toast
        console.error("Error during repost:", error);
      }
    } else {
      console.log("User canceled the repost.");
    }
  };

  return (
    <>
      <button onClick={(e) => repostHandler(e, tweet._id)} className="mx-auto">
        <div className="flex justify-center items-center">
          <BiRepost className="h-7 w-7 my-1 rounded-full p-1 hover:bg-primary" />
          <p>{tweet?.retweets?.length || 0}</p>
        </div>
      </button>
      {/* Ensure ToastContainer is placed at the top-level */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}
