import React from "react";
import Button from "../reuseables/Button";
import payment from "../../assets/payment.webp";
import Container from "../Container";
import Input from "../reuseables/Input";

export const PaymentSuccess = () => {
  return (
    <>
      <div className="text-center my-20">
        <div className="flex items-center justify-center">
          <img src={payment} alt="" />
        </div>
        <div className="my-10">
          <p className="font-bold text-3xl mb-3">Payment Success!</p>
          <p className="text-[#666666] text-2xl">
            it our pleasure to offer you our products
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-3xl">Invoice Number</p>
          <span className="text-[#666666] text-2xl my-3">12345</span>
          <Button classname="px-4 py-3">Download Invoice</Button>
        </div>
      </div>
      <div className="mb-28 ">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <div className="md:relative md:before:absolute md:before:bg-[#307BC9]  md:before:-right-[12px] md:before:top-3 md:before:rounded-[10px] md:before:-z-10 md:before:w-full md:before:h-full">
              <div className="px-6 py-8 md:px-24 md:py-12 bg-[#F0F3F7] rounded-[10px]  border border-[#C8CDD5] md:min-w-[750px] flex flex-col ">
                <div className="text-center mb-6">
                  <span className="font-bold text-4xl">
                    Send Invoice Via Email
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="md:w-2/3">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      bdclassName="w-full"
                      required=""
                      lbclassName=""
                    />
                  </div>
                  <div className="md:w-1/3 self-end">
                    <Button classname="px-20 py-4">Send</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
