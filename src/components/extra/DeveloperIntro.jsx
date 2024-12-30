import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeveloperIntro = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="">
        <Link
          target="_blank"
          to="https://github.com/jahid-111"
          className="hover:text-green-600 flex items-center gap-2 hover:underline "
        >
          <FaLink />{" "}
          <p className="text-center my-2 text-green-500 text-lg font-semibold">
            Developer : Mohd. Jahidul Islam
          </p>
        </Link>
      </div>
      <code className="text-center text-gray-400 mt-2">© Copy X (Twitter)</code>
    </div>
  );
};

export default DeveloperIntro;
