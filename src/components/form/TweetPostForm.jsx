import { useState } from "react";
import PostContextIcon from "./PostContextIcon";
import useAuthVerify from "../../hooks/API/useAuthVerify";
import { handlePostTweet } from "../../action/handlePostTweet";

const PostForm = () => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [content, setContent] = useState("");

  const { authData } = useAuthVerify("verify");
  const userId = authData?.user?._id;
  // console.log(userId);
  // Enable/Disable button based on content input
  const handleInputChange = (e) => {
    setContent(e.target.value);
    setButtonEnabled(e.target.value.trim() !== "");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return; // Prevent submission if content is empty

    const tweetData = { content, userId };

    handlePostTweet(tweetData, setLoading, setContent, setMessage, alert);
  };

  return (
    <form onSubmit={handleSubmit} className="w-11/12">
      {/* Content Section */}
      <div>
        <input
          type="text"
          name="content"
          id="content"
          autoComplete="off"
          value={content}
          onChange={handleInputChange}
          className="w-full text-[1.2rem] text-quinaryDark font-medium bg-transparent placeholder:text-gray-400 outline-none"
          placeholder="What's Happening?!"
          aria-label="Post Content"
        />

        <div className="w-full py-3 border-b border-gray-600">
          <button
            type="button"
            className="text-primary hover:bg-slate-800 font-semibold px-2 text-[0.9rem] rounded-full"
            aria-label="Set Reply Permission"
          >
            Everyone Can Reply
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <PostContextIcon />

        {/* POST TWEET Button */}
        <button
          type="submit"
          disabled={!buttonEnabled || loading}
          className={`bg-blue-600 px-4 py-1 rounded-full ${
            !buttonEnabled || loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Post Tweet"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>

      {/* Display message if any */}
      {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
    </form>
  );
};

export default PostForm;
