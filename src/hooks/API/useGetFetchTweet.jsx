import { useEffect, useState } from "react";
import clientApi from "../../../services/axiosAPI_Config";

export default function useGetFetchTweet(URL) {
  const [isLoadingTweets, setIsLoading] = useState(false);
  const [isErrorTweet, setIsError] = useState(false);
  const [tweets, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Start loading
      setIsError(false); // Reset error state

      try {
        const response = await clientApi.get(URL); // Replace with your endpoint
        // console.log(response);
        setData(response.data); // Update data state
      } catch (error) {
        setIsError(true); // Handle errors
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    }

    fetchData(); // Call the fetch function
  }, [URL]); // Empty dependency array to run only once on mount
  return { isLoadingTweets, isErrorTweet, tweets };
}
