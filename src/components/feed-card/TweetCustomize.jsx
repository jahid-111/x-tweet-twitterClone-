import clientApi from "../../../services/axiosAPI_Config";

export default function TweetCustomize({ tweet, auth }) {
  console.log(auth);
  // console.log(tweet._id);

  async function handleDeleteTweet(id) {
    console.log(id);

    const payload = {
      userId: auth,
      tweetId: tweet?._id,
    };

    console.log(payload);

    try {
      // Pass payload in the `data` property of the Axios request
      const response = await clientApi.delete(`tweet/${payload.tweetId}`, {
        data: payload, // Attach payload here
      });
      console.log(response);
    } catch (error) {
      console.error("Failed to delete tweet:", error);
    }
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // Properly stops the event propagation
      }}
      className="absolute right-7 top-7"
    >
      <div className="flex flex-col w-44 bg-black text-sm text-gray-200 shadow-md shadow-gray-400 rounded-lg p-2 space-y-2">
        <button className=" px-4 py-2 hover:bg-toggle rounded-md transition-colors duration-200">
          Edit
        </button>
        <hr />
        <button
          onClick={() => handleDeleteTweet(tweet.author._id)}
          className="px-4 py-2 hover:bg-toggle rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
