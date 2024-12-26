import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";

const MediaPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 h-[20rem]">
      <GrArticle className="text-blue-500 text-6xl mb-6" />

      {/* Heading */}

      <div className="px-20">
        <h1 className="text-4xl font-bold">Lights, camera … attachments!</h1>
        <h3 className=" text-xl my-2 text-gray-500">
          When you post photos or videos, they will show up here.
        </h3>
      </div>
      {/* Subtext */}
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        <Link className="text-primary hover:text-blue-700 underline" to="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default MediaPage;
