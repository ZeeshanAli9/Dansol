import React from "react";
import logomain from "../../assets/Logo_main.png";
import "../../Style/style.css";
import LoginDesign from "./LoginDesign";
import { Link } from "react-router-dom";
import Button from "../reuseables/Button";

const ResetPassword = () => {
  return (
    <>
      <form>
        <LoginDesign>
          <div>
            <div className="text-center my-6">
              <h2 className="font-bold text-4xl">Reset Password</h2>
            </div>
            <div>
              <div className="my-4">
                <Input
                  label="New Password"
                  type="text"
                  placeholder="Enter Your New Password"
                  bdclassName=""
                  required="required"
                  lbclassName="text-lg"
                  className="border border-[#B9B9C4] bg-[#F9F9F9]"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Confirm Password"
                  type="text"
                  placeholder="Enter Your Confirm Password"
                  bdclassName=""
                  required="required"
                  lbclassName="text-lg"
                  className="border border-[#B9B9C4] bg-[#F9F9F9]"
                />
              </div>

              <div className="mb-4">
                <Link to="/login">
                  <Button classname="w-full py-3 text-lg">Save Now!</Button>
                </Link>
              </div>
            </div>
          </div>
        </LoginDesign>
      </form>
    </>
  );
};

export default ResetPassword;

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
