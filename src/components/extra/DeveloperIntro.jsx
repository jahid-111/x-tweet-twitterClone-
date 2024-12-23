import React from "react";
import { Link } from "react-router-dom";

const DeveloperIntro = () => {
  return (
    <div>
      <p className="text-center my-1 text-green-500 ">
        <Link
          target="_blank"
          to="https://github.com/jahid-111"
          className="hover:text-green-600 "
        >
          Developer : Mohd. Jahidul Islam
        </Link>
      </p>
    </div>
  );
};

export default DeveloperIntro;
