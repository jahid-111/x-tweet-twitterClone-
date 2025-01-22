import clientApi from "../../services/axiosAPI_Config";

/**
 * Function to handle the tweet post request
 * @param {Object} tweetData - The data for the tweet (content, authID)
 * @param {Function} setLoading - The state setter for loading
 * @param {Function} setContent - The state setter for content
 * @param {Function} setError - The state setter for error messages
 * @param {Function} alert - Optional alert function to notify the user (can be replaced with a custom notification handler)
 * @returns {void}
 */
export const handlePostTweet = async (
  tweetData,
  setLoading,
  setContent,
  setError,
  alert
) => {
  setLoading(true); // Start loading state

  try {
    const response = await clientApi.post("tweet", tweetData); // Await the response from axios

    if (response.status === 201) {
      // Success response
      setContent(""); // Clear the input after posting
      setError(null); // Clear any previous errors
      setError("Post Successfully"); // Optionally set a success message in error state
      alert("Tweet posted successfully!"); // Optionally show a success message
    } else {
      throw new Error("Failed to post tweet.");
    }
  } catch (err) {
    setError(err.message); // Set error message if there's an issue
  } finally {
    setLoading(false); // Stop loading state
  }
};
