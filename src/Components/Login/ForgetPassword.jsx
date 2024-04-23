import React from "react";
import "../../Style/style.css";
import { Link } from "react-router-dom";
import LoginDesign from "./LoginDesign";
import Button from "../reuseables/Button";

const ForgetPassword = () => {
  return (
    <>
      <LoginDesign>
        <div className="pb-5">
          <div>
            <h2 className="font-bold text-4xl text-center my-8">
              Forgot Password
            </h2>
            <p className="text-[#6F7985] text-lg text-center my-6">
              We will send a mail to the email address you <br /> registered to
              regain your password
            </p>
          </div>
          <div className="mb-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter Your Email Address"
              bdclassName=""
              required="required"
              lbclassName="text-lg"
              className="border border-[#B9B9C4] bg-[#F9F9F9]"
            />
          </div>
          <div>
            <Link to="/otp">
              <Button classname="w-full py-3 mb-5">Send</Button>
            </Link>
          </div>
        </div>
      </LoginDesign>
    </>
  );
};

export default ForgetPassword;

function Input({
  label = "",
  required = false,
  className = "",
  type,
  placeholder,
  bdclassName = "",
  lbclassName = "",
}) {
  return (
    <div className={`${bdclassName}`}>
      <label
        htmlFor={`${label}`}
        className={`text-[15px] leading-[18px]  mb-1 font-normal ${lbclassName}`}
      >
        {`${label}`}{" "}
      </label>
      <input
        type={`${type}`}
        required={required}
        className={` ${className} rounded-md px-4 py-3 mt-1 w-full outline-none `}
        placeholder={placeholder}
        id={`${label}`}
      />
    </div>
  );
}
