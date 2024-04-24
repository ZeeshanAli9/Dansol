import React, { useState } from "react";
import Container from "./Container";
import down_arrow from "../assets/down_arrow.png";
import { Link } from "react-router-dom";
import { links } from "./Constant";
import { useSelector } from "react-redux";
import PI2 from "../assets/PI2.png";

function Nav2() {
  const [type, settype] = useState(false);
  const [value, setvalue] = useState("");
  const { cartData } = useSelector((state) => state.counter);
  const defaultopen = links.map((link) => link.name);

  const [heading, setHeading] = useState(defaultopen[0]);
  return (
    <>
      <div className="border-1  border-b border-t border-solid border-[#989DA5] md:block hidden sticky top-0 left-0 bg-white z-[70]">
        <Container>
          <div className=" flex justify-between items-center  w-full">
            <div className="flex items-center cursor-pointer group/item relative py-3">
              <span className="cursor-pointer mr-4">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1.25"
                    x2="17"
                    y2="1.25"
                    stroke="#292D32"
                    stroke-width="1.5"
                  />
                  <line
                    y1="7.25"
                    x2="17"
                    y2="7.25"
                    stroke="#292D32"
                    stroke-width="1.5"
                  />
                  <line
                    y1="13.25"
                    x2="17"
                    y2="13.25"
                    stroke="#292D32"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
              <p>Shop By Categories</p>
              <span className="cursor-pointer ml-4 group-hover/item:rotate-180  transition-all duration-300">
                <img src={down_arrow} alt="" />
              </span>
              <div className="absolute bg-[#C3DAF5]  -bottom-[55px] -left-[3px] hidden group-hover/item:flex text-black  min-w-[522px]  z-10 ">
                {links.map((tab) => (
                  <div onClick={() => setHeading(tab.name)}>
                    <div
                      className={`px-[49px] ${
                        heading === tab.name ? "bg-[#E1E7F0]" : "bg-[#C3DAF5]"
                      } flex  py-4 items-center group/edit `}
                    >
                      {tab.name}
                      <span
                        className={`cursor-pointer ml-4 ${
                          heading === tab.name ? "rotate-180" : "rotate-0"
                        } transition-all duration-300`}
                      >
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.55379 0.470423C9.84626 0.763731 9.84559 1.2386 9.55228 1.53108L5.54092 5.53108C5.2482 5.82297 4.77449 5.82297 4.48177 5.53108L0.470403 1.53108C0.177094 1.2386 0.176421 0.763731 0.468899 0.470422C0.761376 0.177114 1.23625 0.17644 1.52956 0.468918L5.01134 3.94084L8.49313 0.468918C8.78644 0.176441 9.26131 0.177114 9.55379 0.470423Z"
                            fill="#292D32"
                          />
                        </svg>
                      </span>
                      <div
                        className={`absolute top-[56px] bg-white ${
                          heading === tab.name ? "grid" : "hidden "
                        } xl:gap-x-28 md:gap-x-10 xl:grid-cols-3 md:grid-cols-2  left-0 xl:min-w-[1050px] md:min-w-[700px] px-[40px] py-[24px] shadow-lg border rounded-b-md rounded-r-md`}
                      >
                        {tab.submenu &&
                          tab.sublinks.map((slink) => (
                            <div>
                              <div className="relative group/subitem">
                                <div className="flex items-center  hover:bg-[#2671BF] hover:text-white rounded-md group/subitem">
                                  <div className="min-w-[200px] py-4 px-4">
                                    {slink.Head}
                                    {slink.sublink.length === 0 && (
                                      <span className="ml-4 px-3 py-1 text-[13px] bg-[#FC3565] text-white">
                                        New
                                      </span>
                                    )}
                                  </div>
                                  {slink.sublink.length >= 1 && (
                                    <span className="cursor-pointer ml-4  transition-all duration-300">
                                      <svg
                                        width="8"
                                        height="15"
                                        viewBox="0 0 8 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M0.293897 0.291891C0.684975 -0.098079 1.31814 -0.097181 1.70811 0.293897L7.70811 6.31094C8.0973 6.70123 8.0973 7.33285 7.70811 7.72315L1.70811 13.7402C1.31814 14.1313 0.684975 14.1322 0.293897 13.7422C-0.097181 13.3522 -0.098079 12.7191 0.291891 12.328L5.58779 7.01704L0.291891 1.7061C-0.098079 1.31503 -0.097181 0.681861 0.293897 0.291891Z"
                                          className="fill-[#292D32] group-hover/subitem:fill-[#ffffff]"
                                        />
                                      </svg>
                                    </span>
                                  )}

                                  <div
                                    className={`${
                                      slink.sublink.length >= 1
                                        ? "absolute z-50 min-w-[260px] bg-[#C3DAF5] p-4 -right-[257px]  top-0 hidden group-hover/subitem:block rounded-md"
                                        : ""
                                    }`}
                                  >
                                    {slink.sublink.map((mylink) => (
                                      <div>
                                        <div className="text-black ] hover:bg-[#2671BF] hover:text-white py-3 px-2 rounded-md">
                                          <Link to={mylink.link}>
                                            {mylink.name}
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-[50%]">
              <div className="relative py-3 border-l border-r border-[#989DA5] ">
                <input
                  type="text"
                  className={`w-full outline-none placeholder:text-[#989DA5]  px-5 pr-8  `}
                  placeholder="Search product or category"
                  value={value}
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setvalue(e.target.value);
                      settype(true);
                    } else {
                      settype(false);
                      setvalue("");
                    }
                  }}
                />
                <span
                  className={`cursor-pointer absolute right-[15px] top-[18px] ${
                    !type ? "hidden" : "block"
                  }`}
                  onClick={() => {
                    setvalue("");
                    settype(false);
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12.4078L13 1"
                      stroke="#111416"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 12.4078L1 1"
                      stroke="#111416"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className={`absolute right-2 top-[10px] cursor-pointer ${
                    type ? "hidden" : "block"
                  }`}
                >
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0772 19C15.0671 19 18.3015 15.6421 18.3015 11.5C18.3015 7.35786 15.0671 4 11.0772 4C7.08742 4 3.85303 7.35786 3.85303 11.5C3.85303 15.6421 7.08742 19 11.0772 19Z"
                      stroke="#989DA5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.5987 24.5C22.0941 22.9379 17.8193 18.5 17.8193 18.5"
                      stroke="#989DA5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                {type && <Searchpanel />}
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/my-account/favorite">
                <button className="mr-9">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </Link>
              <Link to="/cart" className="flex ">
                <button className={`relative mr-9`}>
                  <span
                    className={`block absolute -top-[8px] -right-[6px] w-[19px]  h-[19px] text-white rounded-[50%] bg-[#2367AE] text-[12px]`}
                  >
                    {cartData.length}
                  </span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H2.74001C3.92958 0.25 4.91944 1.0501 5.23293 2.12H17.73C19.833 2.12 21.4396 3.83723 21.288 5.93408L20.7481 13.4339L20.7478 13.4375C20.608 15.2545 19.0257 16.74 17.19 16.74H6.53999C4.46335 16.74 2.82544 14.9669 3.00267 12.8968C3.00264 12.8971 3.00269 12.8965 3.00267 12.8968L3.83259 2.93772C3.88589 2.30412 3.37993 1.75 2.74001 1.75H1C0.585786 1.75 0.25 1.41421 0.25 1ZM5.28094 3.62L4.49741 13.0223L4.49725 13.0242C4.39508 14.2137 5.33696 15.24 6.53999 15.24H17.19C18.2338 15.24 19.171 14.3664 19.2521 13.3242C19.2521 13.3236 19.2522 13.323 19.2522 13.3225L19.7919 5.82615C19.8804 4.603 18.967 3.62 17.73 3.62H5.28094Z"
                      fill="#292D32"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.25 19.25C14.9739 19.25 14.75 19.4739 14.75 19.75C14.75 20.0261 14.9739 20.25 15.25 20.25C15.5261 20.25 15.75 20.0261 15.75 19.75C15.75 19.4739 15.5261 19.25 15.25 19.25ZM13.25 19.75C13.25 18.6454 14.1454 17.75 15.25 17.75C16.3546 17.75 17.25 18.6454 17.25 19.75C17.25 20.8546 16.3546 21.75 15.25 21.75C14.1454 21.75 13.25 20.8546 13.25 19.75Z"
                      fill="#292D32"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 19.25C6.97386 19.25 6.75 19.4739 6.75 19.75C6.75 20.0261 6.97386 20.25 7.25 20.25C7.52614 20.25 7.75 20.0261 7.75 19.75C7.75 19.4739 7.52614 19.25 7.25 19.25ZM5.25 19.75C5.25 18.6454 6.14543 17.75 7.25 17.75C8.35457 17.75 9.25 18.6454 9.25 19.75C9.25 20.8546 8.35457 21.75 7.25 21.75C6.14543 21.75 5.25 20.8546 5.25 19.75Z"
                      fill="#292D32"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7Z"
                      fill="#292D32"
                    />
                  </svg>
                </button>
              </Link>

              <Link to="/login">
                <button className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Nav2;

const Searchpanel = () => {
  return (
    <div className="absolute bg-white  top-[49px] left-0 w-full max-h-[490px] overflow-auto searchpanel   border border-t-0 border-[#307BC9] rounded-b-xl">
      {orderData.map((data) => (
        <div
          key={data.id}
          className="flex items-center justify-between py-2 px-6 border-b last:border-b-0 border-[#B9B9C4] hover:bg-[#EDF0F6] focus:bg-[#EDF0F6]"
        >
          <figure>
            <img
              src={data.Image}
              alt=""
              className="w-[82px] h-[82px] object-cover rounded"
            />
          </figure>
          <div className="flex flex-col basis-[70%]">
            <span className="font-bold text-base block">{data.Pname}</span>
            <span className="font-bold text-base text-[#72777F] block">
              SKU: {data.SKU}
            </span>
          </div>
          <div>
            <span className="font-bold text-lg text-[#307BC9]">
              ${data.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
const orderData = [
  {
    id: 1,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-20",
    qty: 3,
  },
  {
    id: 2,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-21",
    qty: 1,
  },
  {
    id: 3,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "90.00",
    SKU: "106-22",
    qty: 1,
  },
  {
    id: 4,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "90.00",
    SKU: "106-22",
    qty: 1,
  },
  {
    id: 5,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "90.00",
    SKU: "106-22",
    qty: 1,
  },
  {
    id: 6,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "90.00",
    SKU: "106-22",
    qty: 1,
  },
  {
    id: 7,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "90.00",
    SKU: "106-22",
    qty: 1,
  },
];
