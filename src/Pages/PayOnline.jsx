import React from "react";
import Container from "../Components/Container";
import creditimg from "../assets/creditimg.png";

const PayOnline = () => {
  return (
    <>
      <div className="mb-28">
        <Container>
          <div>
            <div className="my-4 mb-12">
              <span>Home / Pay Online</span>
            </div>
            <div className="md:relative md:before:absolute md:before:bg-[#307BC9]  md:before:-right-[12px] md:before:top-3 md:before:rounded-[10px] md:before:-z-10 md:before:w-full md:before:h-full">
              <form action="#">
                <div className="px-6 py-8 md:px-28 md:py-10 lg:px-36 lg:py-16 bg-[#F0F3F7] rounded-[10px]  border border-[#C8CDD5] ">
                  <div className="text-center mb-10 lg:mb-16">
                    <h3 className=" text-3xl sm:text-5xl font-bold">
                      Pay Through Credit Card
                    </h3>
                  </div>
                  <div className="block lg:grid grid-cols-2 gap-6 mb-6">
                    <Input
                      label="Amount"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                    <Input
                      label="Card holder’s name"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                    <Input
                      label="Card info"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                    <Input
                      label="Month Year"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                    <Input
                      label="CVC"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                  </div>
                  <div className="mb-12">
                    <Input
                      label="Invoice Number"
                      type="text"
                      placeholder="Invoice Number"
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="flex justify-center items-center rounded-md text-white    bg-gradient-to-r from-[#307BC9] to-[#3C59A5] hover:bg-gradient-to-r hover:from-[#5a95d4] hover:to-[#2d437a] transition-all duration-500 px-6 py-3 min-w-[130px] sm:min-w-[200px] text-lg">
                      Pay Your Invoice
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div className="mb-28">
        <Container>
          <div>
            <div className="md:relative md:before:absolute md:before:bg-[#307BC9]  md:before:-right-[12px] md:before:top-3 md:before:rounded-[10px] md:before:-z-10 md:before:w-full md:before:h-full">
              <form action="#">
                <div className="px-6 py-8 md:px-28 md:py-10 lg:px-36 lg:py-16 bg-[#F0F3F7] rounded-[10px]  border border-[#C8CDD5] ">
                  <div className="text-center mb-10 lg:mb-16">
                    <h3 className=" text-3xl sm:text-5xl  font-bold">
                      Pay through Paypal
                    </h3>
                    <p className="text-[#878a8e] text-lg mt-2">Amount (AUD)*</p>
                  </div>
                  <div className="block lg:grid grid-cols-2 gap-6 mb-12">
                    <Input
                      label="Other amount"
                      type="number"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                    <Input
                      label="Invoice Number"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                      lbclassName=""
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <figure className="mr-4">
                      <img src={creditimg} alt="" />
                    </figure>
                    <button className="flex justify-center items-center rounded-md text-white    bg-gradient-to-r from-[#307BC9] to-[#3C59A5] hover:bg-gradient-to-r hover:from-[#5a95d4] hover:to-[#2d437a] transition-all duration-500 px-6 min-w-[130px] sm:min-w-[200px] py-3 text-lg">
                      Pay Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PayOnline;

function Input({
  label = "",
  required = "",
  className = "",
  type,
  placeholder = "",
  bdclassName = "",
  lbclassName = "",
  multiple = "",
}) {
  return (
    <div className={`mb-4 lg:mb-0 ${bdclassName}`}>
      <label
        htmlFor={`${label}`}
        className={`text-[15px] leading-[18px]  mb-2 font-normal ${lbclassName}`}
      >
        {`${label}`}{" "}
      </label>
      <input
        type={`${type}`}
        required={required}
        className={` ${className} rounded-md px-4 py-4 mt-4 w-full outline-none `}
        placeholder={placeholder}
        id={`${label}`}
        multiple={`${multiple}`}
      />
    </div>
  );
}
