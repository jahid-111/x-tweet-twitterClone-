import { useState } from "react";

export default function usePostData() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const link = "http://localhost:8000/api/tweet";

  const handlePostData = async (data) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(link, {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(data), // Send the post data as JSON
      });

      // Handle response
      if (response.ok) {
        const result = await response.json();
        setPost(result); // Save the response data
      } else {
        throw new Error("Failed to post data");
      }
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return { post, loading, error, handlePostData }; // Return handlePostData for use in components
}
