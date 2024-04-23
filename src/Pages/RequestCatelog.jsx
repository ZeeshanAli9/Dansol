import React, { useLayoutEffect } from "react";
import Container from "../Components/Container";
import Input from "../Components/reuseables/Input";
import Button from "../Components/reuseables/Button";
import capctha from "../assets/capctha.png";
function RequestCatelog() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-28">
        <Container>
          <div className="md:relative md:before:absolute md:before:bg-[#307BC9]  md:before:-right-[12px] md:before:top-3 md:before:rounded-[10px] md:before:-z-10 md:before:w-full md:before:h-full">
            <form action="">
              <div className="px-6 py-8 md:px-28 md:py-10 lg:px-36 lg:py-16 bg-[#F0F3F7] rounded-[10px]   border border-[#C8CDD5] ">
                <div className="text-center mb-6">
                  <h3 className=" text-[28px] sm:text-[40px] leading-[48px] font-bold">
                    Please fill the form
                  </h3>
                  <p className="text-[15px] leading-[18px] block mx-auto max-w-[245px] sm:max-w-full ">
                    We will email you the latest catalogue in 12 hours
                  </p>
                </div>
                <div>
                  <Input
                    label="Your Name"
                    type="text"
                    placeholder="Enter Your Name"
                    bdclassName="mt-4 mb-10"
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                  <Input
                    label="Your Email Address"
                    type="email"
                    placeholder="Enter Your Email"
                    bdclassName="mt-4 mb-10"
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                  <Input
                    label="Organization"
                    type="text"
                    placeholder="Enter your organization"
                    bdclassName="mt-4 mb-10"
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
                  <Input
                    label="Position"
                    type="text"
                    placeholder="Enter your position"
                    bdclassName="mt-4 mb-10"
                  />
                  <Input
                    label="Address"
                    type="text"
                    placeholder="Your address"
                    bdclassName="mt-4 mb-10"
                    required="required"
                    lbclassName="after:content-['*']  after:text-black"
                  />
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
                  <Button classname="px-12 sm:px-16 py-3 rounded-md">
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

export default RequestCatelog;
