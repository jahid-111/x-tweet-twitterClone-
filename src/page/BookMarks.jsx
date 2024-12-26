import { Link } from "react-router-dom";

const BookMarks = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
      <h5 className=" text-2xl bg-orange-500 p-5 cursor-not-allowed">
        This Page Are not Created
      </h5>
      <h6 className="m-8 text-xl">
        as need{" "}
        <Link
          className="p-3 mx-2 bg-primary font-semibold hover:bg-gray-600 hover:text-primary"
          to={"https://github.com/jahid-111"}
          target="_blank"
        >
          i
        </Link>
        will create soon
      </h6>
    </div>
  );
};

export default BookMarks;
