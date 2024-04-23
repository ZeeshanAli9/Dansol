import React, { useLayoutEffect, useState } from "react";
import Container from "../Components/Container";
import Input from "../Components/reuseables/Input";
import Button from "../Components/reuseables/Button";
import capctha from "../assets/capctha.png";
import { Link, useNavigate } from "react-router-dom";
import PayPal from "../assets/PayPal.png";
import ammer from "../assets/Amex.webp";
import mastercard from "../assets/Mastercard.webp";
import stripe from "../assets/Stripe.webp";
import visa from "../assets/Visa.webp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputMask } from "primereact/inputmask";

function Checkout() {
  const [selectedId, setSelectedId] = useState(null);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleRadioChange = (event) => {
    setSelectedId(event.target.id); // Update the selected ID when a radio input is clicked
  };
  const navigate = useNavigate();

  const schema = yup
    .object({
      cardholder: yup.string().required(),
      cardnumber: yup.string().required(),
      date: yup.string().required(),
      cvc: yup.string().matches(/^\d{3}$/, "CVC must be a 3-digit number"),
      privacy: yup.boolean(true).required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await schema.validate(data, { abortEarly: false });
      navigate("/paymentsuccess");
    } catch (error) {
      console.error(error);
      alert("There was an error. Please check the form and try again.");
    }
  };
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="my-4">
              Home / <span>Checkout</span>
            </div>
            <div className="my-6 font-bold text-3xl tracking-[3%]">
              Checkout
            </div>
          </div>
          <div className="my-8">
            <div className="flex items-start flex-col lg:flex-row gap-6 mb-20 md:pb-20">
              <form
                action=""
                className="rounded-xl  w-full xl:w-2/3  mb-10 md:mb-0"
              >
                <div>
                  <div>
                    <div className="px-6 py-8 md:px-28 md:py-10 lg:px-5 lg:py-8 bg-[#F0F3F7] rounded-[10px] border border-[#C8CDD5] ">
                      <>
                        <div>
                          <div>
                            <h2 className="text-[20px] font-bold my-3">
                              Billing Address
                            </h2>
                          </div>
                          <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                            <Input
                              label="Registered Business Name"
                              type="text"
                              placeholder="Enter your business name"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                            <Input
                              label="Trending Name"
                              type="text"
                              placeholder="Your trending name"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                            <Input
                              label="Business Email Address"
                              type="text"
                              placeholder="Enter your email"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                              multiple="multiple"
                            />
                            <Input
                              label="Name of Proprietori(s)"
                              type="text"
                              placeholder="Your proprietary name"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                          </div>
                          <div className="mb-5">
                            <Input
                              label="Suite/Unit No"
                              type="text"
                              placeholder="Enter Unit no"
                              required="required"
                            />
                          </div>
                          <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                            <Input
                              label="Registered Business Name"
                              type="text"
                              placeholder="Enter your business name"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                            <Input
                              label="Trending Name"
                              type="text"
                              placeholder="Your trending name"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                            <Input
                              label="Business Email Address"
                              type="text"
                              placeholder="Enter your email"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                            <Input
                              label="Name of Proprietori(s)"
                              type="text"
                              placeholder="Your proprietary name"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
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
                              className="rounded-md px-4 py-4 mt-2 w-full outline-none h-28 resize-none"
                              placeholder="Comments..."
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
                              required="required"
                            />
                            <Input
                              label="Company Name"
                              type="text"
                              placeholder="Company"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                          </div>
                          <div className="mb-5">
                            <Input
                              label="Address"
                              type="text"
                              placeholder="Address here"
                              required="required"
                            />
                          </div>
                          <div className="block xl:grid grid-cols-2 gap-7 mb-5">
                            <Input
                              label="City/Town"
                              type="text"
                              placeholder="City"
                              required="required"
                            />
                            <Input
                              label="State / County"
                              type="text"
                              placeholder="Add State"
                              required="required"
                            />
                            <Input
                              label="Post/Zip Code"
                              type="text"
                              placeholder="Post"
                              required="required"
                            />
                            <Input
                              label="Country"
                              type="text"
                              placeholder="Y"
                              required="required"
                              lbclassName="after:content-['*']  after:text-black"
                            />
                          </div>
                        </div>
                      </>

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
              </form>
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
                    <li className="flex items-center ">
                      <input
                        type="radio"
                        name="business"
                        id="1"
                        className="w-[18px] h-[18px] mr-2 cursor-pointer"
                        onChange={handleRadioChange}
                        checked={selectedId === "1"}
                      />
                      <label
                        className="text-[15px] font-bold cursor-pointer"
                        htmlFor="1"
                      >
                        Director Bank Transfer{" "}
                      </label>
                    </li>
                    <li className="flex items-center mt-3 ">
                      <input
                        type="radio"
                        name="business"
                        id="2"
                        className="w-[18px] h-[18px] mr-2 cursor-pointer"
                        onChange={handleRadioChange}
                        checked={selectedId === "2"}
                      />
                      <label
                        className="mr-5 text-[15px] font-bold cursor-pointer"
                        htmlFor="2"
                      >
                        PayPal (Special Discount 7.5%){" "}
                      </label>
                      <img src={PayPal} alt="" />
                    </li>
                    <li className="flex items-center mt-3 ">
                      <div>
                        <input
                          type="radio"
                          name="business"
                          id="3"
                          className="w-[18px] h-[18px] mr-2 cursor-pointer"
                          onChange={handleRadioChange}
                          checked={selectedId === "3"}
                        />
                      </div>
                      <div className="flex justify-between gap-2 ">
                        <div>
                          <label
                            className="text-[15px] font-bold cursor-pointer"
                            htmlFor="3"
                          >
                            Credit Cart (Stripe)
                          </label>
                        </div>
                        <div className="flex flex-wrap">
                          <img src={visa} alt="" className="ml-2 " />
                          <img src={ammer} alt="" className="ml-2" />
                          <img src={mastercard} alt="" className="ml-2" />
                          <img src={stripe} alt="" className="ml-2" />
                        </div>
                      </div>
                    </li>
                  </ul>

                  <form onSubmit={handleSubmit(onSubmit)} action="">
                    {selectedId === "3" && (
                      <div>
                        <div className="mt-4">
                          <div className="grid gap-3 ">
                            <div>
                              <label
                                htmlFor=""
                                className="text-[15px] leading-[18px]  mb-2 font-normal"
                              >
                                Card holder
                              </label>
                              <input
                                {...register("cardholder")}
                                type="text"
                                className="rounded-md px-4 py-4 mt-2 w-full outline-none "
                                placeholder="David Smith"
                              />
                              {errors.cardholder && (
                                <span className="text-pink-600 text-sm">
                                  Enter Your Name!
                                </span>
                              )}
                            </div>
                            <div>
                              <label
                                htmlFor=""
                                className="text-[15px] leading-[18px]  mb-2 font-normal"
                              >
                                Card mumber
                              </label>
                              <InputMask
                                mask="9999 9999 9999 9999"
                                {...register("cardnumber")}
                                type="text"
                                className="rounded-md px-4 py-4 mt-2 w-full outline-none"
                                placeholder="1234 5678 9012 3456"
                              />

                              {errors.cardnumber && (
                                <span className="text-pink-600 text-sm">
                                  Enter Your Card Number!
                                </span>
                              )}
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="col-span-2">
                                <label
                                  htmlFor=""
                                  className="text-[15px] leading-[18px]  mb-2 font-normal"
                                >
                                  Expiration month and year
                                </label>

                                <InputMask
                                  {...register("date")}
                                  mask="99/99"
                                  placeholder="99/99"
                                  className="rounded-md px-4 py-4 mt-2 w-full outline-none "
                                />

                                {errors.date && (
                                  <span className="text-pink-600 text-sm">
                                    Enter Date!
                                  </span>
                                )}
                              </div>
                              <div>
                                <label
                                  htmlFor=""
                                  className="text-[15px] leading-[18px]  mb-2 font-normal"
                                >
                                  CVC
                                </label>
                                <input
                                  {...register("cvc")}
                                  type="text"
                                  inputMode="numeric"
                                  className="rounded-md px-4 py-4 mt-2 w-full outline-none "
                                  maxLength="3"
                                  placeholder="231"
                                />
                                {errors.cvc && (
                                  <span className="text-pink-600 text-sm">
                                    Enter CVC
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center mt-4">
                          <div>
                            <input
                              {...register("privacy")}
                              type="checkbox"
                              name=""
                              id="privacyp"
                              className="mr-2 w-[18px] h-[18px]"
                            />
                          </div>
                          <label htmlFor="privacyp">
                            I have read and agree to the website <br />
                            <span className="underline">
                              Terms and Conditions
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                    <div className="px-4 py-4">
                      <button
                        type="submit"
                        className={`flex justify-center items-center rounded-md text-white px-4 py-4 w-full ${
                          selectedId !== "3"
                            ? "bg-gray-300 cursor-default"
                            : " cursor-pointer bg-gradient-to-r from-[#307BC9] to-[#3C59A5] hover:bg-gradient-to-r hover:from-[#5a95d4] hover:to-[#2d437a] transition-all duration-500 "
                        }   `}
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Checkout;

/** 
* * <div className={`mb-4 lg:mb-0 ${bdclassName}`}>
* * <label
* *  htmlFor={`${label}`}
* *  className={`text-[15px] leading-[18px]  mb-2 font-normal ${lbclassName}`}
>
* *  {`${label}`}{" "}
* *</label>
* *<input
* *  type={`${type}`}
* * required={required}
* * className={` ${className} rounded-md px-4 py-4 mt-4 w-full outline-none `}
* * placeholder={placeholder}
* *  id={`${label}`}
/>
</div>  
*/
