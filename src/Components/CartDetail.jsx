import React, { useEffect, useState } from "react";
import Container from "./Container";
import PI from "../assets/PI.png";
import CloseIcon from "./Icon/CloseIcon";
import SelectOpt from "./reuseables/SelectOpt";
import Button from "./reuseables/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removecart } from "../store/CounterSlice";
import PlusIcon from "./Icon/PlusIcon";
import MinusIcon from "./Icon/MinusIcon";
import { Link } from "react-router-dom";

function CartDetail() {
  const { cartData } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [isEmpty, setIsEmpty] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [Gst, setGst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [disable, setdisable] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setIsEmpty(cartData.length <= 0);
    const newQuantities = {};
    cartData.map((item) => {
      newQuantities[item.id] = item.qty;
    });
    setQuantities(newQuantities);
  }, [cartData, setQuantities]);

  useEffect(() => {
    let total = 0;
    cartData.map((item) => {
      total += item.price * quantities[item.id];
    });
    setTotalPrice(total.toFixed(2));
    setShippingFee((0).toFixed(2));
    setGst(((total * 10) / 100).toFixed(2));
    setGrandTotal(
      (
        parseFloat(totalPrice) +
        parseFloat(Gst) +
        parseFloat(shippingFee)
      ).toFixed(2)
    );
  }, [quantities, cartData, totalPrice]);

  const handlecardData = (item) => {
    dispatch(removecart(item));
  };

  const increase = (item) => {
    dispatch(increment(item));
  };
  const decrease = (item) => {
    dispatch(decrement(item));
  };
  const handleDisable = (e) => {
    const Value = e.target.value;
    if (Value.length >= 1) {
      setdisable(true);
      if (/^[a-zA-Z0-9]*$/.test(value)) {
        setValue(value);
      } else alert("dmething is going wron");
    } else {
      setdisable(false);
    }
  };

  return (
    <>
      <section>
        <Container>
          <div>
            <div className="my-3">
              Home / <span>Cart</span>
            </div>
            <div className="my-8 font-bold text-3xl tracking-[3%]">
              Cart Page
            </div>
          </div>
          {isEmpty ? (
            <div className="w-full text-center font-bold text-[50px] mb-10 ">
              CART IS EMPTY <br /> Please Add Something in cart
            </div>
          ) : (
            <div className="flex items-start flex-col lg:flex-row gap-3 mb-20 md:pb-20">
              <div className="rounded-xl bg-[#F0F3F7] px-6 py-7 w-full xl:w-2/3 border border-[#C8CDD5] mb-10 md:mb-0">
                {cartData.map((item) => (
                  <div className="mb-5" key={item.id}>
                    <table className="w-full  table-auto">
                      <tbody className=" w-full ">
                        <tr className="rounded-lg bg-white  items-center  w-full relative sm:static ">
                          <td className="ml-auto md:ml-0 md:px-2 absolute top-0 right-0 sm:static">
                            <div
                              onClick={() => handlecardData(item)}
                              className="mx-2 py-2 flex items-center justify-center cursor-pointer"
                            >
                              <CloseIcon />
                            </div>
                          </td>
                          <td className="py-3 md:px-2 align-top md:align-baseline">
                            <div className="ml-2 w-[72px] h-[72px] sm:w-24 sm:h-24 ">
                              <img
                                src={item.Image}
                                alt=""
                                className="w-full h-full border rounded-lg"
                              />
                            </div>
                          </td>
                          <td className="py-1 md:py-3 md:px-2 md:min-w-[320px] lg:min-w-[280px] xl:min-w-[410px] ">
                            <div className="flex flex-col pl-2  md:items-start font-bold text-[15px] md:text-[18px] ml-2">
                              <div className="  md:px-0 pr-[50px] sm:pr-0">
                                {item.Pname}
                              </div>
                              <div className="flex flex-col md:flex-row justify-start  md:items-center mt-1 md:mt-3">
                                <div className="my-1 md:my-2 mr-6 rounded-lg flex order-2 md:order-1">
                                  <div
                                    className={`rounded-md border-[#B9B9C4] border flex font-normal`}
                                  >
                                    <button
                                      className="outline-none rounded-l-md cursor-pointer w-8 h-8 flex items-center justify-center bg-[#F0F2F6]"
                                      onClick={() => decrease(item)}
                                    >
                                      <MinusIcon />
                                    </button>
                                    <span className="min-w-10 flex items-center justify-center">
                                      {item.qty}
                                    </span>
                                    <button
                                      className="outline-none rounded-r-md cursor-pointer w-8 h-8 flex items-center justify-center bg-[#F0F2F6]"
                                      onClick={() => increase(item)}
                                    >
                                      <PlusIcon />
                                    </button>
                                  </div>
                                </div>
                                <span className="flex order-1 md:order-2 my-2 text-[14px] font-normal">
                                  SKU: {item.SKU}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 md:px-2 sm:align-top text-center align-bottom absolute bottom-0 right-0 sm:static ">
                            <div className="flex items-center flex-col sm:flex-row">
                              <div className="font-medium text-[14px]  min-w-[65px]  ">
                                Unit Price
                              </div>

                              <div className="text-[22px] text-[#2367AE] font-bold md:text-right min-w-[90px] md:mr-2 ">
                                {item.price}$
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
                <div className="flex justify-between flex-col md:flex-row mt-8 md:mb-10">
                  <div className="flex relative mb-8 md:mb-0">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className=" py-3 w-full rounded-l-lg border-t border-b border-l pl-4 pr-1 outline-none   md:min-w-72"
                      onChange={handleDisable}
                      maxLength={8}
                      value={value}
                    />
                    <button
                      className={`${
                        disable
                          ? "bg-black text-white"
                          : "bg-[#B9B9C4] text-black"
                      }  flex items-center  px-4 py-[12px] text-bold rounded-r-lg absolute right-0 md:-right-[126px] cursor-pointer`}
                    >
                      Apply Coupon
                    </button>
                  </div>
                  <div className="flex justify-end md:block ">
                    <Button classname="px-7 py-3 md:mx-0 ml-auto ">
                      Update Cart
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-[#C6DFED] w-full xl:w-1/3">
                <div className="mb-4">
                  <div className="bg-[#2367AE] rounded-t-xl  px-4 py-4 text-white">
                    <h2 className="font-bold text-[22px]">Shipping</h2>
                  </div>
                  <div className="px-4 py-2">
                    <SelectOpt
                      label="Country"
                      className={"w-full outline-none border-none rounded-md  "}
                      options={option}
                      isClearable={false}
                    />
                  </div>
                  <div className="px-4 pb-2">
                    <SelectOpt
                      label="State"
                      className={"w-full outline-none border-none rounded-md  "}
                      options={option}
                      isClearable={false}
                    />
                  </div>
                  <div className="px-4 pb-3">
                    <SelectOpt
                      label="Shipping Options"
                      disabled={true}
                      className={
                        "w-full outline-none rounded-md  bg-transparent"
                      }
                      options={option}
                    />
                  </div>
                  <div className="px-4 pb-2">
                    <p>
                      <strong>Note: </strong>This section also updates tax rates
                      based on the shipping location.
                    </p>
                  </div>
                </div>

                <div className="bg-[#2367AE] rounded-t-xl  px-4 py-4 text-white">
                  <h2 className="font-bold text-[22px]">Cart Summary</h2>
                </div>

                <div className="px-4 py-5">
                  <div className="flex font-bold justify-between text-[15px]  mb-5">
                    <h2 className="pr-3">Item Summary Total:</h2>
                    <span>{totalPrice}$</span>
                  </div>
                  <div className="flex font-bold justify-between text-[15px] mb-5">
                    <h2 className="pr-3">
                      Shipping: Free shipping (5-6 Business Days)
                    </h2>
                    <span>{shippingFee}$</span>
                  </div>
                  <div className="flex font-bold justify-between text-[15px] mb-5">
                    <h2 className="pr-3">included GST @ 10%</h2>
                    <span>{Gst}$</span>
                  </div>
                  <div className="flex font-bold justify-between text-[15px] text-[#2367AE] mb-6">
                    <h2 className="pr-3">Grand Total</h2>
                    <span>{grandTotal}$</span>
                  </div>
                  <Link to="/checkout">
                    {" "}
                    <Button classname="w-full py-3">Proceed the checked</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default CartDetail;

const option = [
  { value: "Default", label: "Default" },
  { value: "Low To high", label: "Low To high" },
  { value: "High to Low", label: "High to Low" },
];
