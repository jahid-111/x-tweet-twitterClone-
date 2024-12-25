import { VscMention } from "react-icons/vsc";
import { Link } from "react-router-dom";

const NotifyMentionPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <VscMention className="text-blue-500 text-6xl mb-6" />

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">No One Mentions Yet</h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        <Link
          className="text-primary hover:text-blue-700 underline"
          to="/explore/entertainment"
        >
          Entertainment
        </Link>
      </p>
    </div>
  );
};

export default NotifyMentionPage;
