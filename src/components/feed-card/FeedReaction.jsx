import Like from "./reaction/Like";
import useAuth from "../../hooks/useAuth";

const FeedReaction = ({ tweet }) => {
  const authData = useAuth();

  return (
    <div className="flex items-center gap-5 justify-between w-full">
      <Like tweet={tweet} auth={authData} />
    </div>
  );
};

export default FeedReaction;
