import Container from "./Container";
import React from "react";
import footLogo from "../assets/footLogo.svg";
import footfb from "../assets/footFb.svg";
import footlinkedin from "../assets/footlinkedin.svg";
import foottwitter from "../assets/foottwitter.svg";
import insta from "../assets/insta.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="pb-[30px] footer">
        <div className=" border-b border-white ">
          <Container>
            <div className="flex flex-col xl:flex-row items-center pb-8 xl:pb-0">
              <div className="text-white w-full xl:w-1/2  text-[16px] sm:text-2xl text-center xl:text-start	md:px-[78px] pt-[53px] pb-[30px]">
                <p className="">
                  Stay up to date on techniques, product information, continuing
                  education, seminars & events, plus special promotions.
                </p>
              </div>
              <div className="w-[80%] xl:w-1/2  mx-auto ">
                <div className="relative max-w-[570px] px-[23px] pt-[21px]">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-[60px] md:h-[68px]  rounded-lg  pl-4 pr-[5.5rem] sm:pr-44 outline-none border-none "
                    placeholder="Search..."
                  />
                  <span className=" justify-center items-center absolute right-0 w-20 sm:w-[150px] py-[18px] md:w-[168px] md:py-[22px]  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg text-center align-middle">
                    Submit
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="pt-12  flex flex-col sm:flex-wrap lg:flex-nowrap sm:flex-row text-white md:px-[35px] px-[10px]">
              <div className="w-[100%] sm:w-[50%] lg:w-[35%]  md:pr-24 mb-6 md:pl-[35px] pt-[14px]">
                <img
                  src={footLogo}
                  alt=""
                  className="mb-9 pt-5 cursor-pointer"
                />
                <p className="leading-6">
                  A company that entails the experience of more than six decades
                  in manufacturing and selling Surgical instruments, Dental
                  instruments worldwide
                </p>

                <ul className="flex mt-16">
                  {footSocial.map((icon) => (
                    <li
                      className="mr-8 hover:-translate-y-2 transition-all duration-300"
                      key={icon.id}
                    >
                      <a href={icon.href}>
                        <img src={icon.Image} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[100%] sm:w-[50%] lg:w-[23%]  mb-6">
                <h2 className="text-[22px] mb-10 pt-6">Services</h2>
                <ul>
                  {serviceData.map((service) => (
                    <li
                      className="mb-6 last:mb-0 cursor-pointer "
                      key={service.id}
                    >
                      <Link to={`${service.link}`}>
                        <span className="cursor-pointer hover:text-blue-400">
                          {service.Sname}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[100%] sm:w-[50%] lg:w-[23%] mb-6">
                <h2 className="text-[22px] mb-10 pt-6">Information</h2>
                <ul>
                  {InfoData.map((info) => (
                    <li
                      className="mb-6 last:mb-0 cursor-pointer "
                      key={info.id}
                    >
                      <Link to={`${info.link}`}>
                        <span className="cursor-pointer hover:text-blue-400">
                          {info.Sname}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[23%] mb-6">
                <h2 className="text-[22px] mb-10 pt-6">Contact Us</h2>
                <ul>
                  <li className="mb-6 ">
                    <span className="cursor-pointer hover:text-blue-400 group flex items-center">
                      <span className="mr-3 ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99844 11.8082C8.22344 11.8082 6.77344 10.3666 6.77344 8.58324C6.77344 6.79991 8.22344 5.36658 9.99844 5.36658C11.7734 5.36658 13.2234 6.80824 13.2234 8.59158C13.2234 10.3749 11.7734 11.8082 9.99844 11.8082ZM9.99844 6.61658C8.9151 6.61658 8.02344 7.49991 8.02344 8.59158C8.02344 9.68324 8.90677 10.5666 9.99844 10.5666C11.0901 10.5666 11.9734 9.68324 11.9734 8.59158C11.9734 7.49991 11.0818 6.61658 9.99844 6.61658Z"
                            fill="white"
                          />
                          <path
                            d="M10.0014 18.9671C8.76803 18.9671 7.52637 18.5004 6.5597 17.5754C4.10137 15.2088 1.3847 11.4338 2.4097 6.94211C3.3347 2.86711 6.89303 1.04211 10.0014 1.04211C10.0014 1.04211 10.0014 1.04211 10.0097 1.04211C13.118 1.04211 16.6764 2.86711 17.6014 6.95045C18.618 11.4421 15.9014 15.2088 13.443 17.5754C12.4764 18.5004 11.2347 18.9671 10.0014 18.9671ZM10.0014 2.29211C7.57637 2.29211 4.4597 3.58378 3.6347 7.21711C2.7347 11.1421 5.20137 14.5254 7.4347 16.6671C8.87637 18.0588 11.1347 18.0588 12.5764 16.6671C14.8014 14.5254 17.268 11.1421 16.3847 7.21711C15.5514 3.58378 12.4264 2.29211 10.0014 2.29211Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>6 Moonah Ave Brookfield VIC 3338</span>
                    </span>
                  </li>
                  <li className="mb-6 ">
                    <span className="cursor-pointer hover:text-blue-400 flex items-center">
                      <span className="mr-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.3096 15.275C18.3096 15.575 18.243 15.8833 18.1013 16.1833C17.9596 16.4833 17.7763 16.7666 17.5346 17.0333C17.1263 17.4833 16.6763 17.8083 16.168 18.0166C15.668 18.225 15.1263 18.3333 14.543 18.3333C13.693 18.3333 12.7846 18.1333 11.8263 17.725C10.868 17.3166 9.90964 16.7666 8.95964 16.075C8.0013 15.375 7.09297 14.6 6.2263 13.7416C5.36797 12.875 4.59297 11.9666 3.9013 11.0166C3.21797 10.0666 2.66797 9.11663 2.26797 8.17496C1.86797 7.22496 1.66797 6.31663 1.66797 5.44996C1.66797 4.88329 1.76797 4.34163 1.96797 3.84163C2.16797 3.33329 2.48464 2.86663 2.9263 2.44996C3.45964 1.92496 4.04297 1.66663 4.65964 1.66663C4.89297 1.66663 5.1263 1.71663 5.33464 1.81663C5.5513 1.91663 5.74297 2.06663 5.89297 2.28329L7.8263 5.00829C7.9763 5.21663 8.08464 5.40829 8.15964 5.59163C8.23464 5.76663 8.2763 5.94163 8.2763 6.09996C8.2763 6.29996 8.21797 6.49996 8.1013 6.69163C7.99297 6.88329 7.83464 7.08329 7.63464 7.28329L7.0013 7.94163C6.90964 8.03329 6.86797 8.14163 6.86797 8.27496C6.86797 8.34163 6.8763 8.39996 6.89297 8.46663C6.91797 8.53329 6.94297 8.58329 6.95964 8.63329C7.10964 8.90829 7.36797 9.26663 7.73464 9.69996C8.10964 10.1333 8.50964 10.575 8.94297 11.0166C9.39297 11.4583 9.8263 11.8666 10.268 12.2416C10.7013 12.6083 11.0596 12.8583 11.343 13.0083C11.3846 13.025 11.4346 13.05 11.493 13.075C11.5596 13.1 11.6263 13.1083 11.7013 13.1083C11.843 13.1083 11.9513 13.0583 12.043 12.9666L12.6763 12.3416C12.8846 12.1333 13.0846 11.975 13.2763 11.875C13.468 11.7583 13.6596 11.7 13.868 11.7C14.0263 11.7 14.193 11.7333 14.3763 11.8083C14.5596 11.8833 14.7513 11.9916 14.9596 12.1333L17.718 14.0916C17.9346 14.2416 18.0846 14.4166 18.1763 14.625C18.2596 14.8333 18.3096 15.0416 18.3096 15.275Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M15.4167 7.49992C15.4167 6.99992 15.025 6.23325 14.4417 5.60825C13.9083 5.03325 13.2 4.58325 12.5 4.58325"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.3333 7.49996C18.3333 4.27496 15.725 1.66663 12.5 1.66663"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span>1300 920 097</span>
                    </span>
                  </li>
                  <li className="mb-6 ">
                    <span className="cursor-pointer hover:text-blue-400 flex items-center">
                      <span className="mr-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.168 17.0833H5.83464C3.33464 17.0833 1.66797 15.8333 1.66797 12.9166V7.08329C1.66797 4.16663 3.33464 2.91663 5.83464 2.91663H14.168C16.668 2.91663 18.3346 4.16663 18.3346 7.08329V12.9166C18.3346 15.8333 16.668 17.0833 14.168 17.0833Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.1654 7.5L11.557 9.58333C10.6987 10.2667 9.29036 10.2667 8.43203 9.58333L5.83203 7.5"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span>sales@ar-instrumed.com.au</span>
                    </span>
                  </li>
                  <li className="mb-6  ">
                    <span className="cursor-pointer hover:text-blue-400 flex items-center">
                      <span className="mr-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0013 18.9583C5.05964 18.9583 1.04297 14.9416 1.04297 9.99996C1.04297 5.05829 5.05964 1.04163 10.0013 1.04163C14.943 1.04163 18.9596 5.05829 18.9596 9.99996C18.9596 14.9416 14.943 18.9583 10.0013 18.9583ZM10.0013 2.29163C5.7513 2.29163 2.29297 5.74996 2.29297 9.99996C2.29297 14.25 5.7513 17.7083 10.0013 17.7083C14.2513 17.7083 17.7096 14.25 17.7096 9.99996C17.7096 5.74996 14.2513 2.29163 10.0013 2.29163Z"
                            fill="white"
                          />
                          <path
                            d="M13.0909 13.275C12.9826 13.275 12.8742 13.25 12.7742 13.1833L10.1909 11.6416C9.54922 11.2583 9.07422 10.4166 9.07422 9.67497V6.2583C9.07422 5.91663 9.35755 5.6333 9.69922 5.6333C10.0409 5.6333 10.3242 5.91663 10.3242 6.2583V9.67497C10.3242 9.97497 10.5742 10.4166 10.8326 10.5666L13.4159 12.1083C13.7159 12.2833 13.8076 12.6666 13.6326 12.9666C13.5076 13.1666 13.2992 13.275 13.0909 13.275Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>9:00am-4:00pm Weekdays</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white flex flex-col lg:flex-row items-start md:items-center md:justify-center px-2 sm:px-0 pb-12 lg:pb-0 pt-2 ">
              <div className="mb-4">
                <span>©Copyright Densol 2024</span>
              </div>
              <div className=" w-[58%] border-b border-white hidden lg:block mx-6"></div>
              <span className="block mb-4">
                Designed & Developed By{" "}
                <a href="https://tecmyer.com.au" target="_blank">
                  {" "}
                  <span className="underline font-bold">Tecmyer</span>
                </a>
              </span>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;

const footSocial = [
  {
    id: 1,
    Image: footfb,
    href: "#",
  },
  {
    id: 2,
    Image: foottwitter,
    href: "#",
  },
  {
    id: 3,
    Image: footlinkedin,
    href: "#",
  },
  {
    id: 4,
    Image: insta,
    href: "#",
  },
];

const serviceData = [
  {
    id: 1,
    link: "/pay-online",
    Sname: "Pay Bills Online",
  },
  {
    id: 2,
    link: "javascript:void(0);",
    Sname: "Open A Credit Account",
  },
  {
    id: 3,
    link: "javascript:void(0);",
    Sname: "Become A Distributor",
  },
  {
    id: 4,
    link: "javascript:void(0);",
    Sname: "Medical Rep",
  },
  {
    id: 5,
    link: "javascript:void(0);",
    Sname: "Distributer Inquiry",
  },
];

const InfoData = [
  {
    id: 1,
    link: "/sterilization-instruction",
    Sname: "Sterilizing & Cleaning",
  },
  {
    id: 2,
    link: "javascript:void(0);",
    Sname: "Instructions",
  },
  {
    id: 3,
    link: "javascript:void(0);",
    Sname: "Credit Terms",
  },
  {
    id: 4,
    link: "/warranty-policy",
    Sname: "Warranty policy",
  },
  {
    id: 5,
    link: "javascript:void(0);",
    Sname: "Manufacturing Process",
  },
  {
    id: 6,
    link: "/blogs",
    Sname: "Blogs",
  },
  {
    id: 7,
    link: "javascript:void(0);",
    Sname: "Privacy Policy",
  },
];
