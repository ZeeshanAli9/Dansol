import React, { useLayoutEffect } from "react";
import Container from "../Components/Container";
import Input from "../Components/reuseables/Input";
import Button from "../Components/reuseables/Button";
import capctha from "../assets/capctha.png";

function OpenAccount() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="mb-10 mt-10 md:my-28">
        <Container>
          <div className="md:relative md:before:absolute md:before:bg-[#307BC9]  md:before:-right-[12px] md:before:top-3 md:before:rounded-[10px] md:before:-z-10 md:before:w-full md:before:h-full">
            <form action="#">
              <div className="px-6 py-8 md:px-28 md:py-10 lg:px-36 lg:py-16 bg-[#F0F3F7] rounded-[10px]  border border-[#C8CDD5] ">
                <div className="text-center mb-10 lg:mb-16">
                  <h3 className=" text-[28px] sm:text-[40px] leading-[48px] font-bold">
                    Register With Densol
                  </h3>
                </div>
                <div className="block lg:grid grid-cols-2 gap-6 mb-12">
                  <Input
                    label="Registered Business Name"
                    type="text"
                    placeholder="Enter your business name"
                    bdclassName=""
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                  <Input
                    label="Trending Name"
                    type="text"
                    placeholder="Your trending name"
                    bdclassName=""
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                  <Input
                    label="Business Email Address"
                    type="Email"
                    placeholder="Enter your email"
                    bdclassName=""
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                  <Input
                    label="Name of Proprietori(s)"
                    type="text"
                    placeholder="Your proprietary name"
                    bdclassName=""
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                </div>
                <div className="mb-10">
                  <div>
                    <h2 className="font-bold text-[28px] mb-6">
                      Billing Address
                    </h2>
                  </div>
                  <div className="mb-5">
                    <Input
                      label="Suite/Unit No"
                      type="text"
                      placeholder="Enter Unit no"
                      bdclassName=""
                      required="required"
                    />
                  </div>
                  <div className="block lg:grid grid-cols-2 gap-6 ">
                    <Input
                      label="Street"
                      type="text"
                      placeholder="Your street"
                      bdclassName=""
                      required="required"
                      lbclassName="after:content-['*']  after:text-black"
                    />
                    <Input
                      label="Postal Code"
                      type="text"
                      placeholder="Your code"
                      bdclassName=""
                      required="required"
                      lbclassName="after:content-['*']  after:text-black"
                    />
                    <Input
                      label="City"
                      type="text"
                      placeholder="Your city"
                      required="required"
                      lbclassName="after:content-['*']  after:text-black"
                    />
                    <Input
                      label="State"
                      type="text"
                      placeholder="Your state"
                      required="required"
                      lbclassName="after:content-['*']  after:text-black"
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <div>
                    <h2 className="font-bold text-[28px] mb-6">
                      Delivery address
                    </h2>
                  </div>
                  <div className="mb-5">
                    <Input
                      label="Suite/Unit No"
                      type="text"
                      placeholder="Your building"
                      bdclassName=""
                      required="required"
                    />
                  </div>
                  <div className="block lg:grid grid-cols-2 gap-6 ">
                    <Input
                      label="Street "
                      type="text"
                      placeholder="Your street"
                      required="required"
                    />
                    <Input
                      label="Postal Code"
                      type="text"
                      placeholder="Your code"
                      required="required"
                    />
                    <Input
                      label="City"
                      type="text"
                      placeholder="ciy name"
                      required="required"
                    />
                    <Input
                      label="State"
                      type="text"
                      placeholder="Your state"
                      required="required"
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <div>
                    <h2 className="font-bold text-[28px] mb-6">
                      Contact Details
                    </h2>
                  </div>
                  <div className="block lg:grid grid-cols-2 gap-6 ">
                    <Input
                      label="Phone"
                      type="text"
                      placeholder="Enter your phone"
                      required="required"
                      lbclassName="after:content-['*']  after:text-black"
                    />
                    <Input
                      label="Fax"
                      type="text"
                      placeholder="Enter your fax"
                      bdclassName=""
                      required=""
                    />
                    <Input
                      label="Email"
                      type="text"
                      placeholder="Enter your email"
                      required="required"
                      lbclassName="after:content-['*']  after:text-black"
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <div>
                    <h2 className="font-bold text-[28px] mb-6">
                      Business Details
                    </h2>
                  </div>
                  <div className="flex flex-col gap-6">
                    <Input
                      label="How long has the business been established?"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                    />
                    <Input
                      label="How long have the current proprietors owned business?"
                      type="text"
                      placeholder=""
                      bdclassName=""
                      required="required"
                    />
                  </div>
                  <div>
                    <ul className="sm:flex gap-5 flex-wrap mt-8 ">
                      <li className="flex items-center mb-3 sm:mb-0">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[20px] h-[20px] mr-2"
                        />
                        <span>Dentist </span>
                      </li>
                      <li className="flex items-center mb-3 sm:mb-0">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[20px] h-[20px] mr-2"
                        />
                        <span>Dental Specialist (specify) </span>
                      </li>
                      <li className="flex items-center mb-3 sm:mb-0">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[20px] h-[20px] mr-2"
                        />
                        <span>Laboratory</span>
                      </li>
                      <li className="flex items-center mb-3 sm:mb-0">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[20px] h-[20px] mr-2"
                        />
                        <span>Laboratory Specialist (specify) </span>
                      </li>
                      <li className="flex items-center">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[20px] h-[20px] mr-2"
                        />
                        <span>Other</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-12">
                  <div>
                    <h2 className="font-bold text-[28px] mb-0">
                      Trade Reference Details
                    </h2>
                    <p className="text-[15px] mb-5">
                      Please give the names and phone numbers of two suppliers
                      for trade reference purposes.
                    </p>
                  </div>
                  <div className="block lg:grid grid-cols-2 gap-7 ">
                    <Input
                      label="Person1"
                      type="text"
                      placeholder="Name here"
                      bdclassName="mb-5 md:mb-0"
                      required="required"
                    />
                    <Input
                      label="Phone"
                      type="text"
                      placeholder="Enter your phone"
                      bdclassName="mb-5 md:mb-0"
                      required="required"
                    />
                    <Input
                      label="Person2"
                      type="text"
                      placeholder="Name here"
                      bdclassName="mb-5 md:mb-0"
                      required="required"
                    />
                    <Input
                      label="Phone"
                      type="text"
                      placeholder="Phone"
                      bdclassName="mb-5 md:mb-0"
                      required="required"
                    />
                  </div>
                  <div className="mt-8 flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className=" mr-2 md:mr-4 w-[20px] h-[20px]"
                    />
                    <span>I agree to the Terms & Conditions</span>
                  </div>
                </div>
                <div>
                  <div className="max-w-full sm:max-w-[392px] flex justify-between items-center rounded-[4px] border border-[#C8C8C8] bg-white px-5 py-5 my-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mr-2 md:mr-4 w-[20px] h-[20px]"
                      />
                      <span className="text-[16px] md:text-[19px]">
                        I’m not a robot
                      </span>
                    </div>
                    <div>
                      <div>
                        <img src={capctha} alt="" className="mx-auto mb-1" />
                      </div>
                      <p className="text-[12px] md:text-[14px] text-[#575757]">
                        reCAPTCHA
                      </p>
                      <p className="text-[10px] text-[#575757]">
                        Privacy - Terms
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button classname="px-12 sm:px-20 py-4 rounded-md">
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default OpenAccount;
