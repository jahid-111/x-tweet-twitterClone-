import { toast } from "react-toastify";
import clientApi from "../../../../services/axiosAPI_Config";

export default function Follow({ user, authId, isFollowing, onFollowChange }) {
  async function handleUserFollow(e, id) {
    e.preventDefault();
    const payload = {
      userId: authId,
      targetId: user._id,
    };

    try {
      const response = await clientApi.put(`user/${id}/follow`, payload);

      if (response.status === 200) {
        const newFollowingStatus = !isFollowing; // Toggle following status
        onFollowChange(newFollowingStatus); // Update the parent state

        // Show success message
        if (newFollowingStatus) {
          toast.success("You're now following the user");
        } else {
          toast.warn("You unfollowed the user");
        }
      } else {
        toast.error("Failed to follow/unfollow. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  }

  return (
    <button
      onClick={(e) => handleUserFollow(e, user?._id)}
      className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium rounded-full h-8 w-24"
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}
