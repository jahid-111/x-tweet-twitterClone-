import FeedCard from "../../../components/feed-card/FeedCard";
import { useOutletContext } from "react-router-dom";
const PostsProfilePage = () => {
  const userData = useOutletContext();
  const tweets = userData;
  console.log(tweets);

  return (
    <div>
      {tweets?.map((tweet) => (
        <FeedCard key={tweet._id} tweetPost={tweet} />
      ))}
    </div>
  );
};

export default PostsProfilePage;
