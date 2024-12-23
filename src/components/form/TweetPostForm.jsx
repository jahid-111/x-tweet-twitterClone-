"use client";

import { useState } from "react";
import PostContextIcon from "./PostContextIcon";

const PostForm = ({ userId }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setButtonEnabled(e.target.value.trim() !== "");
  };

  return (
    <form className="w-11/12  ">
      {/* Content Section */}
      <div>
        <input
          type="text"
          name="content"
          id="content"
          autoComplete="off"
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

      <div className=" flex justify-between items-center mt-2">
        <PostContextIcon />

        {/* POST TWEET Button */}
        <button
          disabled={!buttonEnabled || loading}
          type="submit"
          className={`bg-blue-600 px-4 py-1 rounded-full ${
            !buttonEnabled || loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Post Tweet"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
