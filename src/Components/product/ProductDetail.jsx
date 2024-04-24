import React, { useEffect, useId, useState } from "react";
import DetProImg from "../../assets/DetProImg.png";

import shopping_cartbtn from "../../assets/shopping_cartbtn.svg";
import Heartlogo from "../Icon/Heartlogo";
import Container from "../Container";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { addcart } from "../../store/CounterSlice";

function ProductDetail() {
  const [counter, setcounter] = useState(1);
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [color, setcolor] = useState("none");
  const [stroke, setStroke] = useState("#292D32");

  // const { id } = useParams();
  //
  // const PDdetail = id;
  const ids = useId();
  useEffect(() => {
    if (open) {
      setOpen1(false);
    }
  }, [open]);

  useEffect(() => {
    if (open1) {
      setOpen(false);
    }
  }, [open1]);

  const increment = () => {
    setcounter(counter + 1);
  };

  const decrement = () => {
    if (counter <= 1) {
      setcounter(1);
    } else {
      setcounter(counter - 1);
    }
  };
  const changeColor = () => {
    setcolor("#2367AE");
    setStroke("none");
    setTimeout(() => {
      setcolor("none");
      setStroke("#292D32");
    }, 500);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    dispatch(addcart(item));
  };

  return (
    <Container>
      <div className="relative">
        <div className="mt-3 text-[15px]">
          Home / <span>{PDdetail.map((pname) => pname.Pname)}</span>
        </div>
        <div className="">
          {PDdetail.map((item) => (
            <div className="flex flex-col lg:flex-row my-4" key={item.ids}>
              <div className="w-full h-[450px] lg:h-[620px] lg:w-1/2 bg-slate-200 px-5 py-16">
                <img src={item.Image} alt="" className="mx-auto h-[100%]" />
              </div>
              <div
                className="w-full lg:w-1/2 lg:px-[67px]  lg:top-0 lg:mt-0 mt-10"
                key={item.ids}
              >
                <div className="mb-7">
                  <h2 className="text-2xl md:text-[32px] -tracking-[0.5px] ">
                    {item.Pname}
                  </h2>
                  <div className="mt-4 mb-3">
                    <span className="line-through text-[24px] text-slate-400 mr-7">
                      ${item.dicPrice}
                    </span>
                    <span className="text-[32px] text-[#2367AE] font-bold">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-[15px] font-medium">{item.proDetail}</p>
                </div>
                <div className="flex justify-between gap-2 bg-white">
                  <div className="w-[33%] sm:w-[20%] lg:w-[43%]  flex border border-[#B9B9C4] rounded-md justify-between lg:justify-normal">
                    <div className="w-full flex justify-between">
                      <span
                        className={` border bg-[#F0F2F6] font-bold py-[12px] px-3 rounded-l-md cursor-pointer flex items-center justify-center ${
                          counter == 1
                            ? "opacity-50 pointer-events-none select-none"
                            : "opacity-100"
                        }`}
                        onClick={decrement}
                      >
                        <svg
                          width="12"
                          height="2"
                          viewBox="0 0 12 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="12" height="1.5" fill="#292D32" />
                        </svg>
                      </span>
                      <span className="text-center flex justify-center items-center px-3 sm:px-4 md:px-6">
                        {counter}
                      </span>
                      <span
                        className={`border bg-[#F0F2F6]  font-bold py-[12px]  px-3 cursor-pointer rounded-r-md flex items-center justify-center`}
                        onClick={increment}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="5.25"
                            width="12"
                            height="1.5"
                            fill="#292D32"
                          />
                          <rect
                            x="6.75"
                            width="12"
                            height="1.5"
                            transform="rotate(90 6.75 0)"
                            fill="#292D32"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <button
                    className="border bg-[#2367AE] text-white rounded-md font-bold py-[12px]  w-full  flex justify-center items-center"
                    onClick={() => handleAddCart(item)}
                  >
                    <img src={shopping_cartbtn} alt="" className="mr-6" />
                    Add to Cart
                  </button>
                  <div
                    className={`border bg-[#F0F2F6] rounded-md font-bold py-2 px-2 cursor-pointer hidden lg:flex w-[20%] justify-center items-center`}
                    onClick={changeColor}
                  >
                    <Heartlogo color={color} stroke={stroke} />
                  </div>
                </div>
                <div className="flex flex-row py-3 gap-2">
                  <div
                    className={`border mt-3 bg-[#F0F2F6] rounded-md font-bold py-3 px-2 cursor-pointer flex w-[20%] sm:w-[10%] justify-center items-center lg:hidden`}
                    onClick={changeColor}
                  >
                    <Heartlogo color={color} stroke={stroke} />
                  </div>
                  <button className="mt-3  bg-[#F0F2F6] rounded-md font-bold py-3 w-full">
                    Distribution Enquiry
                  </button>
                </div>
                <div className="mt-3 ">
                  <div className="text-[15px] mb-1 font-bold">
                    SKU: <span className="font-bold">{item.SKU}</span>
                  </div>
                  <div className="text-[14px] mb-2">
                    <span className="text-[#90969F]">Categories: </span>
                    {item.categories.map((itemcate) => (
                      <span className=" text-[14px]" key={ids}>
                        {itemcate},&nbsp;
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-b border-black ">
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpen(!open)}
                    >
                      <h2 className="text-[22px] font-bold py-3 text-[#292D32]">
                        Discription
                      </h2>
                      <div className="mr-3">
                        {open ? (
                          <svg
                            width="18"
                            height="4"
                            viewBox="0 0 18 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="0.875"
                              width="18"
                              height="2.25"
                              fill="#292D32"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="7.875"
                              width="18"
                              height="2.25"
                              fill="#292D32"
                            />
                            <rect
                              x="10.125"
                              width="18"
                              height="2.25"
                              transform="rotate(90 10.125 0)"
                              fill="#292D32"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div
                      className={`  overflow-hidden ${
                        open
                          ? "h-28 transition-all ease-in duration-700"
                          : "h-0 transition-all ease-in duration-700"
                      }`}
                    >
                      <ul className="">
                        {item.description.map((detail) => (
                          <li className="ml-2 text-[14px]" key={ids}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-b border-black ">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpen1(!open1)}
                  >
                    <h2 className="text-[22px] font-bold py-3 text-[#292D32]">
                      Shopping Info
                    </h2>
                    <div className="mr-3">
                      {open1 ? (
                        <svg
                          width="18"
                          height="4"
                          viewBox="0 0 18 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.875"
                            width="18"
                            height="2.25"
                            fill="#292D32"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="7.875"
                            width="18"
                            height="2.25"
                            fill="#292D32"
                          />
                          <rect
                            x="10.125"
                            width="18"
                            height="2.25"
                            transform="rotate(90 10.125 0)"
                            fill="#292D32"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className={`  overflow-hidden ${
                      open1
                        ? "h-32 transition-all ease-in duration-700"
                        : "h-0 transition-all ease-in duration-700"
                    }`}
                  >
                    <ul className="mb-5">
                      {item.Shippinginfo.map((detail) => (
                        <li className="ml-2 text-[14px]">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;

const PDdetail = [
  {
    id: 1,
    Image: DetProImg,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
];
