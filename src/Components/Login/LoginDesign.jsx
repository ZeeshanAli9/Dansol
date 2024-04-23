import React from "react";
import logomain from "../../assets/Logo_main.png";
import "../../Style/style.css";
import { Link } from "react-router-dom";

const LoginDesign = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen relative login-layout">
        <Link to="/">
          <span className="block w-[200px] h-[33px] pl-4 pt-4 md:pl-10 md:pt-10">
            <img src={logomain} alt="" className="" />
          </span>
        </Link>
        <div
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white shadow-3xl rounded-xl border border-[#B9B9C4] w-full
        px-10 py-4 max-w-[350px] sm:max-w-[440px]"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default LoginDesign;
