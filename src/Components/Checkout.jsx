import React from "react";
import Container from "./Container";
import Input from "./reuseables/Input";
import Button from "./reuseables/Button";
import capctha from "../assets/capctha.png";
import { Link } from "react-router-dom";
import PayPal from "../assets/PayPal.png";

function Checkout() {
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="my-3">
              Home / <span>Checkout</span>
            </div>
            <div className="my-8 font-bold text-3xl tracking-[3%]">
              Checkout
            </div>
          </div>
          <div className="my-28">
            <form action="">
              <div className="flex items-start flex-col lg:flex-row gap-3 mb-20 md:pb-20">
                <div className="rounded-xl  w-full xl:w-2/3  mb-10 md:mb-0">
                  <div>
                    <div className="px-6 py-8 md:px-28 md:py-10 lg:px-5 lg:py-8 bg-[#F0F3F7] rounded-[10px] border border-[#C8CDD5] ">
                      <div>
                        <div>
                          <h2 className="text-[20px] font-bold my-3">
                            Billing Address
                          </h2>
                        </div>
                        <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                          <Input
                            label="Registered Business Name*"
                            type="text"
                            placeholder="Enter your business name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Trending Name*"
                            type="text"
                            placeholder="Your trending name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Business Email Address*"
                            type="text"
                            placeholder="Enter your email"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Name of Proprietori(s) *"
                            type="text"
                            placeholder="Your proprietary name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                        </div>
                        <div>
                          <Input
                            label="Suite/Unit No "
                            type="text"
                            placeholder="Enter Unit no"
                            bdclassName="mb-5"
                            required="required"
                          />
                        </div>
                        <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                          <Input
                            label="Registered Business Name*"
                            type="text"
                            placeholder="Enter your business name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Trending Name*"
                            type="text"
                            placeholder="Your trending name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Business Email Address*"
                            type="text"
                            placeholder="Enter your email"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Name of Proprietori(s) *"
                            type="text"
                            placeholder="Your proprietary name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="comments"
                            className="text-[15px] leading-[18px]  mb-2 font-normal"
                          >
                            Comments
                          </label>
                          <textarea
                            name=""
                            id="comments"
                            className="rounded-md px-4 py-4 mt-2 w-full outline-none h-28"
                            placeholder="Comments.."
                          ></textarea>
                        </div>
                      </div>
                      <div>
                        <div className="mt-7">
                          <h2 className="text-[20px] font-bold my-5 mt-8">
                            Shipping Details
                          </h2>
                        </div>
                        <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                          <Input
                            label="Full Name"
                            type="text"
                            placeholder="Name"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Company Name*"
                            type="text"
                            placeholder="Company"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                        </div>
                        <div>
                          <Input
                            label="Address"
                            type="text"
                            placeholder="Address here"
                            bdclassName="mb-5"
                            required="required"
                          />
                        </div>
                        <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                          <Input
                            label="City/Town"
                            type="text"
                            placeholder="City"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="State / County"
                            type="text"
                            placeholder="Add State"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Post/Zip Code"
                            type="text"
                            placeholder="Post"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
                          <Input
                            label="Country  *"
                            type="text"
                            placeholder="Y"
                            bdclassName="mb-5 md:mb-0"
                            required="required"
                          />
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
                              <img
                                src={capctha}
                                alt=""
                                className="mx-auto mb-1"
                              />
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
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#C6DFED] w-full xl:w-1/3">
                  <div className="bg-[#2367AE] rounded-t-xl  px-4 py-4 text-white">
                    <h2 className="font-bold text-[22px]">Your order</h2>
                  </div>
                  <div className="px-4 py-5">
                    <div className="flex font-bold justify-between text-[15px]  mb-5">
                      <h2 className="pr-3">Item Summary Total:</h2>
                      <span>totalPrice$</span>
                    </div>
                    <div className="flex font-bold justify-between text-[15px] mb-5">
                      <h2 className="pr-3">
                        Shipping: Free shipping (5-6 Business Days)
                      </h2>
                      <span>shippingFee$</span>
                    </div>
                    <div className="flex font-bold justify-between text-[15px] mb-5">
                      <h2 className="pr-3">included GST @ 10%</h2>
                      <span>Gst$</span>
                    </div>
                    <div className="flex font-bold justify-between text-[15px] text-[#2367AE] mb-3">
                      <h2 className="pr-3">Grand Total</h2>
                      <span>grandTotal$</span>
                    </div>
                  </div>
                  <div className="flex font-bold justify-end text-[22px] bg-[#2367AE] text-white mb-5 px-4 py-4">
                    <h4 className="pr-3">Total</h4>
                  </div>
                  <div className="px-4 py-4">
                    <ul>
                      <li className="flex items-center">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[28px] h-[28px] mr-2"
                        />
                        <span className="text-[15px] font-bold">
                          Director Bank Transfer{" "}
                        </span>
                      </li>
                      <li className="flex items-center mt-3">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[28px] h-[28px] mr-2"
                        />
                        <span className="mr-5 text-[15px] font-bold">
                          PayPal (Special Discount 7.5%){" "}
                        </span>
                        <img src={PayPal} alt="" />
                      </li>
                      <li className="flex items-center mt-3">
                        <input
                          type="radio"
                          name="business"
                          id=""
                          className="w-[28px] h-[28px] mr-2"
                        />
                        <span className="text-[15px] font-bold ">
                          Credit Cart (Stripe)
                        </span>

                        <img src={PayPal} alt="" className="ml-2" />
                        <img src={PayPal} alt="" className="ml-2" />
                        <img src={PayPal} alt="" className="ml-2" />
                        <img src={PayPal} alt="" className="ml-2" />
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Input
                        label="Card holder *"
                        type="text"
                        placeholder="Diana Palavandishvili"
                        bdclassName="mb-2 "
                        required="required"
                      />
                      <Input
                        label="Card mumber *"
                        type="text"
                        placeholder="4224 4224 4224 4224"
                        bdclassName="mb-2 "
                        required="required"
                      />
                      <div className="grid grid-cols-3 gap-4 ">
                        <div className="col-span-2">
                          <Input
                            label="Expiration month and year *"
                            type="text"
                            placeholder="05/2027"
                            bdclassName="mb-2 md-0"
                            required="required"
                          />
                        </div>
                        <div>
                          <Input
                            label="CVC"
                            type="text"
                            placeholder="754"
                            bdclassName="mb-2 md-0"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div>
                        <input
                          type="checkbox"
                          name=""
                          id="privacyp"
                          className="mr-2 w-[24px] h-[24px]"
                        />
                      </div>
                      <label htmlFor="privacyp">
                        I have read and agree to the website <br />
                        <span className="underline">Terms and Conditions</span>
                      </label>
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <Link to="/checkout">
                      <Button classname="w-full py-3">place Order</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Checkout;
