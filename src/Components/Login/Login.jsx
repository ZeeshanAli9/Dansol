import React from "react";
import logomain from "../../assets/Logo_main.png";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/style.css";
import Button from "../reuseables/Button";
import LoginDesign from "./LoginDesign";

const Login = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/favoritelayout/favorite");
  };
  return (
    <>
      <form onClick={(e) => e.preventDefault()}>
        <LoginDesign>
          <div>
            <div className="text-center my-6">
              <h2 className="font-bold text-4xl">Login</h2>
            </div>
            <div>
              <div className="my-4">
                <Input
                  label="Your Email"
                  type="emial"
                  placeholder="Enter your email"
                  bdclassName=""
                  required="required"
                  lbclassName="text-lg"
                  className="border border-[#B9B9C4] bg-[#F9F9F9] "
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  bdclassName=""
                  required="required"
                  lbclassName="text-lg"
                  className="border border-[#B9B9C4] bg-[#F9F9F9]"
                />
              </div>
              <div className="text-end mb-5">
                <Link to="/forgetpassword">
                  <p className="underline text-lg">Forget Password</p>
                </Link>
              </div>
              <div className="mb-4" onClick={handlelogin}>
                <Button classname="w-full py-3 text-lg">Login</Button>
              </div>
              <div className="text-center mb-5">
                <Link to="/openaccount">
                  <p className="underline text-[#2367AE] text-lg">
                    Register Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </LoginDesign>
      </form>
    </>
  );
};

export default Login;

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
