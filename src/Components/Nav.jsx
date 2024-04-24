import React, { useEffect, useState, useRef } from "react";
import Logo_main from "../assets/Logo_main.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { links } from "./Constant";
import PI2 from "../assets/PI2.png";

function Nav() {
  const [open, setOpen] = useState(false);
  const { cartData } = useSelector((state) => state.counter);
  const [type, settype] = useState(false);
  const [value, setvalue] = useState("");
  useEffect(() => {
    setOpen(false);
  }, []);

  const bodyRef = useRef();

  console.log(bodyRef.current);

  const menuopen = () => {
    setOpen(true);
    // ! never use document query selectors always use ref to select dom element
    window.document.querySelector("body").style.overflow = "hidden";
    setHeading(defaultopen[0]);
    setSubHeading("");
    setvalue("");
    settype(false);
  };
  const menuCLose = () => {
    setOpen(false);
    window.document.querySelector("body").style.overflow = "auto";
  };
  const defaultopen = links.map((link) => link.name);

  const [heading, setHeading] = useState(defaultopen[0]);
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      <div className="sticky md:static top-0 z-50 bg-white" ref={bodyRef}>
        <Container>
          <nav className="py-6 px-2 md:px-0">
            <div className="flex justify-between items-center">
              <div className=" w-[150px] sm:w-[200px]  ">
                <Link to="/">
                  <img src={Logo_main} alt="" className="w-full" />
                </Link>
              </div>

              <div>
                <div className="hidden md:flex justify-between items-center">
                  <div className="w-4 mr-3 ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3084 15.2751C18.3084 15.5751 18.2417 15.8834 18.1001 16.1834C17.9584 16.4834 17.7751 16.7667 17.5334 17.0334C17.1251 17.4834 16.6751 17.8084 16.1667 18.0167C15.6667 18.2251 15.1251 18.3334 14.5417 18.3334C13.6917 18.3334 12.7834 18.1334 11.8251 17.7251C10.8667 17.3167 9.90842 16.7667 8.95842 16.0751C8.00008 15.3751 7.09175 14.6001 6.22508 13.7417C5.36675 12.8751 4.59175 11.9667 3.90008 11.0167C3.21675 10.0667 2.66675 9.11675 2.26675 8.17508C1.86675 7.22508 1.66675 6.31675 1.66675 5.45008C1.66675 4.88341 1.76675 4.34175 1.96675 3.84175C2.16675 3.33341 2.48341 2.86675 2.92508 2.45008C3.45841 1.92508 4.04175 1.66675 4.65841 1.66675C4.89175 1.66675 5.12508 1.71675 5.33341 1.81675C5.55008 1.91675 5.74175 2.06675 5.89175 2.28341L7.82508 5.00841C7.97508 5.21675 8.08341 5.40841 8.15841 5.59175C8.23341 5.76675 8.27508 5.94175 8.27508 6.10008C8.27508 6.30008 8.21675 6.50008 8.10008 6.69175C7.99175 6.88341 7.83341 7.08341 7.63341 7.28341L7.00008 7.94175C6.90841 8.03341 6.86675 8.14175 6.86675 8.27508C6.86675 8.34175 6.87508 8.40008 6.89175 8.46675C6.91675 8.53341 6.94175 8.58341 6.95842 8.63341C7.10842 8.90841 7.36675 9.26675 7.73341 9.70008C8.10841 10.1334 8.50841 10.5751 8.94175 11.0167C9.39175 11.4584 9.82508 11.8667 10.2667 12.2417C10.7001 12.6084 11.0584 12.8584 11.3417 13.0084C11.3834 13.0251 11.4334 13.0501 11.4917 13.0751C11.5584 13.1001 11.6251 13.1084 11.7001 13.1084C11.8417 13.1084 11.9501 13.0584 12.0417 12.9667L12.6751 12.3417C12.8834 12.1334 13.0834 11.9751 13.2751 11.8751C13.4667 11.7584 13.6584 11.7001 13.8667 11.7001C14.0251 11.7001 14.1917 11.7334 14.3751 11.8084C14.5584 11.8834 14.7501 11.9917 14.9584 12.1334L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.1751 14.6251C18.2584 14.8334 18.3084 15.0417 18.3084 15.2751Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M15.4167 7.50016C15.4167 7.00016 15.025 6.2335 14.4417 5.6085C13.9083 5.0335 13.2 4.5835 12.5 4.5835"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 7.50008C18.3333 4.27508 15.725 1.66675 12.5 1.66675"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[20px] font-bold">Call +1300 297 689</p>
                </div>
                <div className="flex md:hidden justify-between items-center">
                  <Link to="/cart" className="flex">
                    <button className={`relative mr-6`}>
                      <span
                        className={`block absolute -top-[8px] -right-[6px] w-[19px]  h-[19px] text-white rounded-[50%] bg-[#2367AE] text-[12px]`}
                      >
                        {cartData.length}
                      </span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 8H21"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="mr-6">
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
                  <button onClick={menuopen}>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
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
                        y1="8.25"
                        x2="17"
                        y2="8.25"
                        stroke="#292D32"
                        stroke-width="1.5"
                      />
                      <line
                        y1="15.25"
                        x2="17"
                        y2="15.25"
                        stroke="#292D32"
                        stroke-width="1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </div>
      <div
        className={`block md:hidden fixed bg-white z-[100]  top-0 h-full w-full  px-6 py-5 ${
          !open
            ? "-left-[100%] transition-all duration-500 ease-linear "
            : "left-0 transition-all duration-500 ease-linear "
        }`}
      >
        <div className="flex justify-between bg-white">
          <div className="flex">
            <Link to="/login" className="mr-3">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#2367AE" />
                  <path
                    d="M20 19C22.7614 19 25 16.7614 25 14C25 11.2386 22.7614 9 20 9C17.2386 9 15 11.2386 15 14C15 16.7614 17.2386 19 20 19Z"
                    fill="white"
                  />
                  <path
                    d="M28.5901 29C28.5901 25.13 24.7402 22 20.0002 22C15.2602 22 11.4102 25.13 11.4102 29"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
            <Link to="/my-account/favorite" className="mr-3">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#2367AE" />
                  <path
                    d="M20.62 28.8101C20.28 28.9301 19.72 28.9301 19.38 28.8101C16.48 27.8201 10 23.6901 10 16.6901C10 13.6001 12.49 11.1001 15.56 11.1001C17.38 11.1001 18.99 11.9801 20 13.3401C21.01 11.9801 22.63 11.1001 24.44 11.1001C27.51 11.1001 30 13.6001 30 16.6901C30 23.6901 23.52 27.8201 20.62 28.8101Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
            <Link to="/cart">
              <span className="">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#2367AE" />
                  <path
                    d="M10 10H11.74C12.82 10 13.67 10.93 13.58 12L12.75 21.96C12.61 23.59 13.9 24.99 15.54 24.99H26.19C27.63 24.99 28.89 23.81 29 22.38L29.54 14.88C29.66 13.22 28.4 11.87 26.73 11.87H13.82"
                    fill="white"
                  />
                  <path
                    d="M24.25 30C24.9404 30 25.5 29.4404 25.5 28.75C25.5 28.0596 24.9404 27.5 24.25 27.5C23.5596 27.5 23 28.0596 23 28.75C23 29.4404 23.5596 30 24.25 30Z"
                    fill="white"
                  />
                  <path
                    d="M16.25 30C16.9404 30 17.5 29.4404 17.5 28.75C17.5 28.0596 16.9404 27.5 16.25 27.5C15.5596 27.5 15 28.0596 15 28.75C15 29.4404 15.5596 30 16.25 30Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <button onClick={menuCLose}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L19.9344 1"
                stroke="#111416"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.9344 19L1 1"
                stroke="#111416"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 mb-4 bg-white">
          <div className="relative border border-[#989DA5] bg-white">
            <input
              type="text"
              className={`w-full outline-none placeholder:text-[#989DA5] placeholder:text-[13px] ${
                type ? "pl-8" : "pl-3"
              } pr-8 py-2 `}
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
              className={`absolute left-2 top-[14px] ${
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
            <span className="absolute right-2 top-[6px]">
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
          </div>
        </div>
        <div className="py-2 border-b bg-white">
          <h2 className="font-bold text-[20px] text-[#111416]">
            Shop by Category
          </h2>
        </div>
        <div className="bg-white">
          <ul>
            {links.map((link) => (
              <li className=" border-b">
                <div
                  className="flex justify-between items-center "
                  onClick={() =>
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("")
                  }
                >
                  <h1 className="font-bold py-4">{link.name}</h1>

                  <div
                    className={`${
                      heading !== link.name ? "-rotate-90 " : "rotate-0"
                    }`}
                  >
                    <svg
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4557 0.293897C14.8659 0.684975 14.8649 1.31814 14.4535 1.70811L8.12414 7.70811C7.71358 8.0973 7.04917 8.0973 6.63862 7.70811L0.309216 1.70811C-0.102163 1.31814 -0.103108 0.684974 0.307106 0.293896C0.717321 -0.0971815 1.38335 -0.0980795 1.79473 0.29189L7.38138 5.58779L12.968 0.291891C13.3794 -0.098079 14.0454 -0.097181 14.4557 0.293897Z"
                        fill="#292D32"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  {link.submenu && (
                    <div
                      className={`${
                        heading === link.name
                          ? " overflow-auto transition-all duration-500 ease-linear"
                          : "  overflow-auto transition-all duration-500 ease-linear"
                      }`}
                      style={{
                        maxHeight: `${
                          heading === link.name
                            ? " calc(100vh - 305px)"
                            : "0px "
                        }`,
                      }}
                    >
                      <div className="pt-1">
                        <div>
                          {link.sublinks.map((menu) => (
                            <div>
                              <div className="">
                                <div
                                  className="flex justify-between items-center  py-3 pr-4"
                                  onClick={() =>
                                    subHeading !== menu.Head
                                      ? setSubHeading(menu.Head)
                                      : setSubHeading("")
                                  }
                                >
                                  <div>
                                    {menu.Head}
                                    {menu.sublink.length == 0 && (
                                      <span className="ml-8 px-3 py-1 text-[13px] bg-[#FC3565] text-white">
                                        New
                                      </span>
                                    )}
                                  </div>
                                  {menu.sublink.length >= 1 && (
                                    <div
                                      className={`${
                                        subHeading !== menu.Head
                                          ? "-rotate-90 "
                                          : "rotate-0"
                                      }`}
                                    >
                                      <svg
                                        width="15"
                                        height="8"
                                        viewBox="0 0 15 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M14.4557 0.293897C14.8659 0.684975 14.8649 1.31814 14.4535 1.70811L8.12414 7.70811C7.71358 8.0973 7.04917 8.0973 6.63862 7.70811L0.309216 1.70811C-0.102163 1.31814 -0.103108 0.684974 0.307106 0.293896C0.717321 -0.0971815 1.38335 -0.0980795 1.79473 0.29189L7.38138 5.58779L12.968 0.291891C13.3794 -0.098079 14.0454 -0.097181 14.4557 0.293897Z"
                                          fill="#292D32"
                                        />
                                      </svg>
                                    </div>
                                  )}
                                </div>
                                <div
                                  className={`${
                                    subHeading === menu.Head
                                      ? "md:hidden"
                                      : "hidden"
                                  }`}
                                >
                                  {menu.sublink.map((slinks) => (
                                    <div>
                                      <div className="pl-3 py-3  ">
                                        <Link to={slinks.link}>
                                          {slinks.name}
                                        </Link>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {type && <Searchpanel />}
      </div>
    </>
  );
}

export default Nav;

const Searchpanel = () => {
  return (
    <div className="absolute bg-white  top-[135px] left-0 w-full  z-[1000]   pb-4 rounded-b-xl h-full">
      <div
        className="overflow-auto searchpanel"
        style={{ maxHeight: `calc(100vh - 140px)` }}
      >
        {orderData.map((data) => (
          <div
            key={data.id}
            className="flex items-center justify-between py-4 px-6 border-b last:border-b-0 border-[#B9B9C4] hover:bg-[#EDF0F6] focus:bg-[#EDF0F6]"
          >
            <figure>
              <img
                src={data.Image}
                alt=""
                className="w-[75px] h-[75px] object-cover rounded mr-3"
              />
            </figure>
            <div className="flex flex-col basis-[75%]">
              <span className="font-bold text-sm block">{data.Pname}</span>
              <span className="font-bold text-sm text-[#72777F] block">
                SKU: {data.SKU}
              </span>
            </div>
          </div>
        ))}
      </div>
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
