import { FaReply } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReplyPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 h-[20rem]">
      <FaReply className="text-blue-500 text-6xl mb-6" />

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">No Reply</h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        <Link className="text-primary hover:text-blue-700 underline" to="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ReplyPage;
