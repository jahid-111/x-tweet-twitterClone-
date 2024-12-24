import React from "react";
import XlogoSvg from "../svgComponents/XLogoSvg";

const RootLoader = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen ">
      <XlogoSvg xClass="w-9 h-9 mb-5" />
      <div className="root-loader"></div>
    </div>
  );
};

export default RootLoader;
