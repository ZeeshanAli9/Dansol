import React, { useState } from "react";
import PI from "../../assets/PI.png";

const OrderHistory = () => {
  const [toggle, setToggle] = useState(1);
  const toggletab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <div className="mb-20">
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <div
            className={`cursor-pointer border-b-[3px] px-5 py-1 font-bold text-xl ${
              toggle === 1
                ? "text-[#2367AE] border-[#2367AE]"
                : "text-[#B9B9C4] border-[#B9B9C4]"
            }`}
            onClick={() => toggletab(1)}
          >
            In Progress
          </div>
          <div
            className={`cursor-pointer border-b-[3px] px-5 py-1 font-bold text-xl ${
              toggle === 2
                ? "text-[#2367AE] border-[#2367AE]"
                : "text-[#B9B9C4] border-[#B9B9C4]"
            }`}
            onClick={() => toggletab(2)}
          >
            Completed
          </div>
        </div>
        <div>
          {toggle === 1 && (
            <div>
              {orderprogress.map((data) => (
                <div
                  key={data.id}
                  className="border hover:border-[#307BC9] rounded-xl py-6 px-1 sm:p-6 flex justify-between  mb-5"
                >
                  <div className="relative mr-2 sm:mr-0  ">
                    <img
                      src={data.Image}
                      alt=""
                      className="border border-[#D1D3DF] rounded-[50%] w-[75px] h-[75px] md:w-[85px] md:h-[85px] "
                    />
                    <span className="absolute top-1 right-[4px]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.25631"
                          cy="8.73067"
                          r="7.84615"
                          fill="#79BF59"
                        />
                        <path
                          d="M6.37109 8.18673L8.25417 10.1953L11.3913 6.84766"
                          fill="#79BF59"
                        />
                        <path
                          d="M6.37109 8.18673L8.25417 10.1953L11.3913 6.84766"
                          stroke="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="self-start basis-[44%] sm:basis-[63%] md:basis-[50%] lg:basis-[65%] xl:basis-[75%] flex flex-col justify-center">
                    <div className="flex items-center">
                      <span className="text-xs sm:text-sm text-[#8A8D9F] mr-2">
                        <span>{data.date},</span>
                        <span>{data.time}</span>
                      </span>
                      <span className="text-[#8A8D9F] text-xs sm:text-sm flex items-center">
                        <span className="bg-[#BAC6DC] block w-[10px] h-[10px] rounded-[50%] mr-1"></span>
                        {data.qty} items
                      </span>
                    </div>
                    <div className="font-bold text-base sm:text-lg text-[#2367AE]">
                      Order ID # {data.ID}
                    </div>
                    <div className="text-[#2BA7EB] flex items-center text-sm sm:text-base">
                      <span className="bg-[#2BA7EB] block w-[10px] h-[10px] rounded-[50%] mr-1 "></span>
                      {data.Status}
                    </div>
                  </div>
                  <div className=" flex flex-col items-center justify-center min-w-[106px]  ">
                    <div className="font-bold text-[#2367AE] text-base sm:text-lg mb-3">
                      ${data.price}
                    </div>
                    <div>
                      <button
                        className={`bg-[#DE5F63] rounded-[4px] px-5 sm:px-8 py-2 text-white text-sm ${
                          data.Status === "Inprogress" ||
                          data.Status === "on Hold"
                            ? "block"
                            : "hidden"
                        } group-hover:visible transition-all ease-in duration-100`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {toggle === 2 && (
            <div>
              {orderprogress.map((data) => (
                <div
                  key={data.id}
                  className="border hover:border-[#307BC9] rounded-xl py-6 px-1 sm:p-6 flex justify-between  mb-5"
                >
                  <div className="relative mr-2 sm:mr-0  ">
                    <img
                      src={data.Image}
                      alt=""
                      className="border border-[#D1D3DF] rounded-[50%] w-[75px] h-[75px] md:w-[85px] md:h-[85px] "
                    />
                    <span className="absolute top-1 right-[4px]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.25631"
                          cy="8.73067"
                          r="7.84615"
                          fill="#79BF59"
                        />
                        <path
                          d="M6.37109 8.18673L8.25417 10.1953L11.3913 6.84766"
                          fill="#79BF59"
                        />
                        <path
                          d="M6.37109 8.18673L8.25417 10.1953L11.3913 6.84766"
                          stroke="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="self-start basis-[44%] sm:basis-[63%] md:basis-[50%] lg:basis-[65%] xl:basis-[75%] flex flex-col justify-center">
                    <div className="flex items-center">
                      <span className="text-xs sm:text-sm text-[#8A8D9F] mr-2">
                        <span>{data.date},</span>
                        <span>{data.time}</span>
                      </span>
                      <span className="text-[#8A8D9F] text-xs sm:text-sm flex items-center">
                        <span className="bg-[#BAC6DC] block w-[10px] h-[10px] rounded-[50%] mr-1"></span>
                        {data.qty} items
                      </span>
                    </div>
                    <div className="font-bold text-base sm:text-lg text-[#2367AE]">
                      Order ID # {data.ID}
                    </div>
                    <div className="text-[#2BA7EB] flex items-center text-sm sm:text-base">
                      <span className="bg-[#2BA7EB] block w-[10px] h-[10px] rounded-[50%] mr-1 "></span>
                      {data.Status}
                    </div>
                  </div>
                  <div className=" flex flex-col items-center justify-center min-w-[106px]  ">
                    <div className="font-bold text-[#2367AE] text-base sm:text-lg mb-3">
                      ${data.price}
                    </div>
                    <div>
                      <button
                        className={`bg-[#2367AE] rounded-[4px] px-5 sm:px-8 py-2 text-white text-sm  group-hover:visible transition-all ease-in duration-100`}
                      >
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;

const orderprogress = [
  {
    id: 1,
    Image: PI,
    ID: "123456",
    price: "15.30",
    date: "24 Jun ",
    time: "12:30",
    qty: 3,
    Status: "Inprogress",
  },
  {
    id: 2,
    Image: PI,
    ID: "123456",
    price: "15.30",
    date: "24 Jun ",
    time: "12:30",
    qty: 3,
    Status: "Dispatched",
  },
  {
    id: 3,
    Image: PI,
    ID: "123456",
    price: "15.30",
    date: "24 Jun ",
    time: "12:30",
    qty: 3,
    Status: "Dispatched",
  },
  {
    id: 4,
    Image: PI,
    ID: "123456",
    price: "15.30",
    date: "24 Jun ",
    time: "12:30",
    qty: 3,
    Status: "on Hold",
  },
  {
    id: 5,
    Image: PI,
    ID: "123456",
    price: "15.30",
    date: "24 Jun ",
    time: "12:30",
    qty: 3,
    Status: "Backorder",
  },
];
const ordercomplete = [
  {
    id: 1,
    status: "In Progress",
  },
];
