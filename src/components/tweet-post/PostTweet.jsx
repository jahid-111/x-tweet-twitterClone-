import ImageSmall from "../images/ImageSmall";
import PostForm from "../form/TweetPostForm";

const PostTweet = () => {
  return (
    <div className="p-2 flex gap-2 w-full border-b border-gray-700">
      <div className="w-1/12">
        {/* Image */}
        <div className="">
          <ImageSmall />
        </div>
      </div>

      {/* Post Section */}
      <PostForm />
    </div>
  );
};

export default PostTweet;
