import { useEffect, useState } from "react";
import clientApi from "../../../services/axiosAPI_Config";
import useAuth from "../useAuth";

export default function useReactionLike(tweetId) {
  const { authData } = useAuth();

  const [reactionData, setReactionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const userId = authData?.user?._id;
  const payload = { userId, tweetId };

  // console.log(authData.user?._id);
  async function triggerReact(tweetId) {
    if (!authData.user?._id) {
      // console.error("User is not authenticated.");
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);

      const res = await clientApi.put(`/tweet/${tweetId}/like`, {
        payload, // Using userId from authData
      });

      setReactionData(res.data);
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
