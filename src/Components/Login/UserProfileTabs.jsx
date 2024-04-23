import { px } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, Route, useNavigate } from "react-router-dom";

const UserProfileTabs = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(Tabs[0].linkname);
  const [isloggedin, setIsLogggedIn] = useState(false);
  const handleLogout = () => {
    alert("Logout");
    setIsLogggedIn(true);
  };
  useEffect(() => {
    navigate("/my-account/favorite");
  }, []);

  return (
    <>
      <div
        className="flex  md:flex-col  md:justify-normal flex-row md:px-3 mb-6 md:mb-12 overflow-scroll "
        style={{
          WebkitScrollbar: { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {Tabs.map((data) => (
          <Link
            to={`${data.link}`}
            className="md:mb-4 last:mb-0 text-[#3D537B] "
            key={data.id}
          >
            <div
              className={`cursor-pointer flex mr-2 justify-center items-center md:justify-between px-3 py-2 md:py-4 md:px-5 rounded-md font-bold min-w-[130px]     text-sm md:text-base                 ${
                tab === data.linkname
                  ? "bg-[#307BC9] text-white  "
                  : "bg-[#F0F2F6] border-[#F0F2F6]  "
              }`}
              onClick={() => setTab(data.linkname)}
            >
              {" "}
              {data.linkname}
              <span className="hidden md:block">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.71094 1.12L6.60094 6.01C7.17844 6.5875 7.17844 7.5325 6.60094 8.11L1.71094 13"
                    stroke={tab === data.linkname ? "#ffffff" : "#3D537B"}
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
        <button
          className="cursor-pointer flex bg-[#F0F2F6] justify-between   items-center md:justify-between px-3 py-2 md:py-4 md:px-5 rounded-md font-bold text-sm md:text-base"
          onClick={handleLogout}
        >
          <span className="text-[#DE5F63]">Logout</span>
        </button>
        {isloggedin && <Navigate to="/login" replace={true} />}
        {/* /* tabs as NAvlink */}
        {/* {Tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={`${tab.link}`}
            className="mb-4 last:mb-0 last:text-red-500 "
          >
            {({ isActive }) => (
              <div
                className={`flex items-center justify-between py-4 px-5 rounded-md  ${
                  isActive ? "bg-[#307BC9] text-white" : "bg-[#F0F2F6]"
                }`}
              >
                {tab.linkname}

                <span className="">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.71094 1.12L6.60094 6.01C7.17844 6.5875 7.17844 7.5325 6.60094 8.11L1.71094 13"
                      stroke={isActive ? "#ffffff" : "#3D537B"}
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            )}
          </NavLink>
        ))} */}
      </div>
    </>
  );
};

export default UserProfileTabs;

const Tabs = [
  {
    id: "1",
    link: "favorite",
    linkname: "Favourite",
  },
  {
    id: "2",
    link: "orderHistory",
    linkname: "Order History",
  },
  {
    id: "3",
    link: "shippingaddress",
    linkname: "Shipping Address",
  },
  {
    id: "4",
    link: "accountinfo",
    linkname: "Account Info",
  },
];
