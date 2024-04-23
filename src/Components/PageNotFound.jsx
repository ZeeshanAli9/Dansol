import React from "react";
import notfound from "../assets/notfound.webp";

export const PageNotFound = () => {
  return (
    <>
      <div className="text-center my-20">
        <div className="flex items-center justify-center">
          <img src={notfound} alt="" />
        </div>
        <div className="font-bold text-2xl">
          <span>requested page in not available</span>
        </div>
      </div>
    </>
  );
};
