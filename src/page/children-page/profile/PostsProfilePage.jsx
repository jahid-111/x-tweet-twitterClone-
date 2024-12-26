import FeedCard from "../../../components/feed-card/FeedCard";

const PostsProfilePage = () => {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <FeedCard key={i} />
      ))}
    </div>
  );
};

export default PostsProfilePage;
