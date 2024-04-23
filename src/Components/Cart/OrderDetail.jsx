import React from "react";
import Container from "../Container.jsx";
import PI from "../../assets/PI.png";

const OrderDetail = () => {
  return (
    <>
      <div className="mb-20">
        <Container>
          <div className="mb-6 lg:my-6">
            <h2 className="font-bold text-2xl">Order Detail</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3 bg-[#f0f3f8b3] rounded-lg px-3 sm:px-6 lg:px-8 py-2 lg:py-4 self-start">
              {orderData.map((data) => (
                <div
                  key={data.id}
                  className="flex items-center justify-between py-3 lg:py-4 border-b last:border-none border-[#B9B9C4]"
                >
                  <figure className="mr-2">
                    <img
                      src={data.Image}
                      alt=""
                      className="w-[80px] h-[80px] rounded-[50%] lg:w-[100px] lg:h-[100px] md:rounded-md object-cover"
                    />
                  </figure>
                  <div className="basis-[55%] sm:basis-[70%] xl:basis-[73%] self-start sm:self-center">
                    <p className="font-bold text-[#2367AE] text-lg md:text-xl mb-1 lg:mb-2">
                      {data.Pname}
                    </p>
                    <p className="font-bold text-[#00000060] text-lg md:text-xl">
                      Quantity: {data.qty}
                    </p>
                  </div>
                  <div className="basis-[13%] sm:basis-[10%] lg:basis-[10%]  self-start sm:self-center">
                    <p className="font-bold text-[#000000] text-lg md:text-xl">
                      ${data.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/3 bg-[#f0f3f8b3] rounded-lg self-start px-3 sm:px-8 lg:px-6 py-4">
              <div className="flex px-4 py-3 items-center justify-between text-white bg-[#3C59A5] rounded-lg my-4">
                <div>
                  <span className="font-bold text-xl lg:text-xl">
                    Dispatched{" "}
                  </span>
                </div>
                <div className="cursor-pointer flex items-center px-1 lg:px-2 py-1 justify-between bg-white rounded-md">
                  <span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                        stroke="#3C59A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.75 8.63251L9 10.8825L11.25 8.63251"
                        stroke="#3C59A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 10.8825V4.88251"
                        stroke="#3C59A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.5 12.3825C7.4175 13.3575 10.5825 13.3575 13.5 12.3825"
                        stroke="#3C59A5"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#3C59A5] font-bold text-sm lg:ml-2 hidden lg:block">
                    Download Invoice
                  </span>
                </div>
              </div>
              <ul>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">Invoice No. </p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      #23645478
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">Date</p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      05/03/2024
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">Total Items</p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      3
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">
                      Payment Method
                    </p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      Credit card{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">Shipping</p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      Express
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">Shipping Fee</p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      $5.00
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">
                      GST Included 10%
                    </p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      $17.00
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between py-4">
                    <p className="font-bold text-lg lg:text-xl">Total Amount</p>
                    <p className="font-bold text-lg lg:text-xl text-[#00000060]">
                      $170.00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OrderDetail;

const orderData = [
  {
    id: 1,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-20",
    qty: 3,
  },
  {
    id: 2,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-21",
    qty: 1,
  },
  {
    id: 3,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "90.00",
    SKU: "106-22",
    qty: 1,
  },
];
