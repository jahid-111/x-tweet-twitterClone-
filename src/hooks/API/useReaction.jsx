import { useEffect, useState } from "react";
import clientApi from "../../../services/axiosAPI_Config";
import useAuthVerify from "./useAuthVerify";

export default function useReaction(tweetId) {
  const [reactionData, setReactionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { authData } = useAuthVerify("verify");
  //   console.log(authData.user?._id);
  const userId = authData?.user?._id;
  console.log("user", userId);
  //   console.log("tweet", tweetId);
  const payload = { userId, tweetId };
  async function triggerReact(tweetId) {
    if (!authData.user?._id) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);

      // Make the API call to like/unlike the tweet
      const res = await clientApi.put(`/tweet/${tweetId}/like`, {
        payload, // Using userId from authData
      });

      setReactionData(res.data); // Update reaction data (e.g., likes, isLiked status)
      console.log("Reaction response:", res.data);
    } catch (error) {
      setIsError(true);
      console.error("Error reacting to tweet:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (tweetId) {
      triggerReact(); // Automatically react when tweetId changes
    }
  }, [tweetId]); // Dependency ensures this runs when `tweetId` changes

  return { reactionData, isLoading, isError, triggerReact };
}
