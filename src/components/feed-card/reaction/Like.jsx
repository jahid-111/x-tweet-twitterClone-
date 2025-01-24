import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import clientApi from "../../../../services/axiosAPI_Config";

export default function Like({ tweet, auth }) {
  const [liked, setLiked] = useState({
    isLiked: tweet.likes.includes(auth?.authData?.user?._id),
    likeCount: tweet.likes.length,
  });

  // console.log("Liked state:", liked); // Logs the current state

  async function handleLikeTweet(e, tweetId) {
    e.stopPropagation();

    if (!auth?.authData?.user?._id) {
      console.log("User is not authenticated");
      return;
    }

    const payload = {
      tweetId: tweetId,
      userId: auth?.authData?.user?._id,
    };

    try {
      const response = await clientApi.put(`tweet/${payload?.tweetId}/like`, {
        payload,
      });

      // console.log("Response after like:", response.status); // Log the response from API

      if (response.status === 200) {
        setLiked({
          isLiked: response.data.isLiked, // Update isLiked based on response
          likeCount: response.data.likeCount || 0, // Ensure likeCount is a valid number
        });
      }
    } catch (error) {
      console.error("Error liking the tweet:", error);
    }
  }

  return (
    <div className="flex items-center">
      <button
        onClick={(e) => handleLikeTweet(e, tweet?._id)}
        className={`mx-auto ${
          liked.isLiked ? "text-red-500" : "text-gray-500"
        }`}
      >
        <FaHeart
          className={`h-7 w-7 my-1 rounded-full p-1 hover:bg-primary ${
            liked.isLiked ? "text-red-500" : "text-gray-500"
          }`}
        />
      </button>
      <p className="text-sm text-gray-200 ">{liked.likeCount}</p>
    </div>
  );
}
