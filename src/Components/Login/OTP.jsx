import React, { useState } from "react";
import logomain from "../../assets/Logo_main.png";
import "../../Style/style.css";
import LoginDesign from "./LoginDesign";
import { Link, useNavigate } from "react-router-dom";
import Button from "../reuseables/Button";

const OTP = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);
    setError(false);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    // else if (e.keyCode === "Backspace" && e.target.previousSibling) {
    //   e.target.previousSibling.focus();
    //   console.log("lol");
    // }
  };
  const handleSubmit = () => {
    const sendotp = otp.join("");
    if (sendotp === "2343") {
      navigate("/resetpassword");
      setError(false);
    } else {
      console.log("error");
      setError(true);
      setOtp(["", "", "", ""]);
    }
  };
  return (
    <>
      <LoginDesign>
        <div className="pb-5">
          <div>
            <h2 className="font-bold text-4xl text-center my-8">Enter OTP</h2>
            <p className="text-[#6F7985] text-lg text-center my-6">
              We just sent an OTP on <br />
              jhondeo@gmail.com please enter it here 2343
            </p>
            {error && (
              <div>
                <p className="text-red-700 text-center">Wrong OTP !</p>
              </div>
            )}
          </div>
          <div className="my-10 flex items-center justify-center gap-3">
            {otp.map((data, index) => (
              <input
                type="text"
                name=""
                id=""
                maxLength="1"
                className={`border border-[#B9B9C4]  h-[74px] w-[74px] rounded-[50%] font-bold text-2xl outline-none text-center ${
                  data ? "bg-[#256DB9] text-white" : "bg-[#f9f9f9]"
                }`}
                value={data}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>

          <div className="my-5">
            <p className="text-lg text-center">
              Not Yet Code <span className="text-[#307BC9]"> Resend Code</span>
            </p>
          </div>

          <div onClick={handleSubmit} className="w-full">
            <Button classname="w-full py-4">Confirm</Button>
          </div>
        </div>
      </LoginDesign>
    </>
  );
};

export default OTP;
