import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

const NotifyVerifiedPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <BiBell className="text-blue-500 text-6xl mb-6" />

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">
        You have no Verified Notification.
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        <Link
          className="text-primary hover:text-blue-700 underline"
          to="/explore/trending"
        >
          Trending
        </Link>
      </p>
    </div>
  );
};

export default NotifyVerifiedPage;
