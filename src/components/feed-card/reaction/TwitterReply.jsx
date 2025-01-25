import { useState } from "react";
import { FaSmile, FaImage, FaPoll, FaCalendarAlt } from "react-icons/fa";
import ImageSmall from "../../images/ImageSmall";
import clientApi from "../../../../services/axiosAPI_Config";
import { useNavigate } from "react-router-dom";

export default function TwitterReplyBox({ tweet }) {
  const author = tweet?.author;
  console.log(author.userName);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setContent(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setErrorMessage("Reply cannot be empty.");
      return;
    }
    setLoading(true);
    setErrorMessage("");

    try {
      // Simulate an async submission (replace with actual API call)
      const res = await clientApi.post(`comment/${tweet?._id}/comment`, {
        content,
      });

      if (res.status === 201) {
        setContent("");
        navigate(`/status/${tweet._id}`);
        console.log("Reply posted successfully:", res.data);
      } else {
        setErrorMessage("Failed to post your reply. Please try again.");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Handle specific status codes with custom messages
        if (error.response.status === 403) {
          setErrorMessage(error.response.data.message || "You are restricted.");
        } else if (error.response.status === 400) {
          setErrorMessage(error.response.data.message || "Bad request.");
        } else if (error.response.status === 500) {
          setErrorMessage("Server error, please try again later.");
        } else {
          setErrorMessage("Something went wrong, please try again.");
        }
      } else {
        setErrorMessage("Network error, please check your connection.");
      }
    } finally {
      setLoading(false); // Set loading state to false after API call
    }
  };

  return (
    <div className="w-full text-white p-4 rounded-lg border border-gray-700 space-y-4">
      {/* Tweet Information */}
      <div className="flex items-start gap-4">
        <ImageSmall />
        <div>
          <p className="font-bold">{author?.userName}</p>
          <p className="text-sm text-gray-400">{author?.email}</p>
          <p>{tweet?.content}</p>
        </div>
      </div>

      {/* Reply Input */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="content"
          id="content"
          autoComplete="off"
          value={content}
          onChange={handleInputChange}
          className="w-full text-[1.2rem] text-quinaryDark font-medium bg-transparent placeholder:text-gray-500 outline-none"
          placeholder={`Whats Your thing about "${author.userName}" tweet`}
          aria-label="Post Content"
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        {/* Action Bar */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-blue-500">
            <FaImage className="h-6 w-6 cursor-pointer" />
            <FaSmile className="h-6 w-6 cursor-pointer" />
            <FaPoll className="h-6 w-6 cursor-pointer" />
            <FaCalendarAlt className="h-6 w-6 cursor-pointer" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Submitting..." : "Reply"}
          </button>
        </div>
      </form>
    </div>
  );
}
