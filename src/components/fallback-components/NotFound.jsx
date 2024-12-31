import { PiXLogo } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import usePageDocTitle from "../../hooks/usePageDocTitle";

const NotFound = () => {
  const { pathname } = useLocation();
  const lastSegment = pathname.split("/").pop();
  usePageDocTitle(`${lastSegment} - ⚠️ 404 Not Found `);

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-transparent px-4">
      {/* Twitter Logo */}
      <PiXLogo className="text-blue-500 text-6xl mb-6" />

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">
        This page <span className="text-orange-500">"{lastSegment}"</span> isn’t
        available.
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        Sorry, the page you were trying to visit doesn’t exist or has been
        removed.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
