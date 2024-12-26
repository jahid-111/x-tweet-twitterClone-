import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 h-[20rem]">
      <GrArticle className="text-blue-500 text-6xl mb-6" />

      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">No Articles</h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        <Link
          className="text-primary hover:text-blue-700 underline"
          to="/explore/trending"
        >
          Sports
        </Link>
      </p>
    </div>
  );
};

export default ArticlePage;
