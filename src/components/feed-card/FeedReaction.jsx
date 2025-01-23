import { actionItems } from "../../utils/userIconStaticData";
import useReactionLike from "../../hooks/API_Hooks/useReaction";

const FeedReaction = ({ tweetId }) => {
  const { reactionData, isLoading, triggerReact } = useReactionLike(tweetId);

  const handleReactionBy = async (e, name, tweetId) => {
    e.stopPropagation();
    console.log(name, tweetId);

    if (name === "comments") {
      // router.push(`/compose/comment-reply/${tweetId}`);
      console.log(tweetId);
    } else if (name === "like") {
      if (!isLoading) {
        await triggerReact(); // Trigger the like reaction
      }
    } else if (name === "repost") {
      window.prompt("Are you sure?");
    } else if (name === "chart") {
      window.alert("Oops....!! ");
    }
  };

  return (
    <div className="flex items-center gap-5 justify-between w-full">
      {actionItems.map((item, i) => (
        <div key={i} className="flex justify-center items-center">
          <button
            onClick={(e) => handleReactionBy(e, item.name, tweetId)}
            className="mx-auto"
            disabled={isLoading}
          >
            <item.icon className="h-7 w-7 my-1 rounded-full p-1 hover:bg-primary" />
          </button>
          <p className="text-sm text-gray-500 ms-1">
            {reactionData?.likes?.length || 99}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeedReaction;
