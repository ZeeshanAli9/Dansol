import React, { useEffect, useLayoutEffect, useState } from "react";
import Container from "../Components/Container";
import image2 from "../assets/image2.png";
import banner from "../assets/banner.png";
import Button from "../Components/reuseables/Button";
import Layer_1 from "../assets/Layer_1.png";
import Layer_2 from "../assets/Layer_2.png";
import surgicalitem from "../assets/surgicalitem.png";
import featurep1 from "../assets/featurep1.png";
import featurep2 from "../assets/featurep2.png";
import { events, tabs } from "../Components/Constant";
import { motion } from "framer-motion";
import comments from "../assets/comments.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Style/style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QRpopup from "../Components/QRpopup";
import bannerbottom1 from "../assets/bannerbottom1.webp";
import bannerbottom2 from "../assets/bannerbottom2.webp";
import bannerbottom3 from "../assets/bannerbottom3.webp";
import bannerbottom4 from "../assets/bannerbottom4.webp";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState(tabs[0]);
  const [qrPopUp, setQrPopUp] = useState(false);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownloadPopup = () => {
    setQrPopUp(true);
    window.document.querySelector("body").style.overflow = "hidden";
  };

  const handletabclick = (index) => {
    setActiveTab(index);
    setTabData(tabs[index]);
  };
  const eventnavigae = () => {
    navigate("/eventdetail");
  };
  return (
    <>
      <div>
        <div className="banner md:pb-24">
          <Container>
            <div className="py-16 flex justify-between flex-col lg:flex-row w-full gap-10">
              <div className=" lg:w-1/3 pr-12 md:pr-32 lg:py-16 xl:px-24 flex flex-col order-2 lg:order-1">
                <h2 className="text-[93px] leading-[91px]  text-white font-bold mb-4">
                  Densol Events
                </h2>
                <p className="text-white text-[16px] leading-[25px] text-sm mb-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the.
                </p>
                <button className="px-4 py-3 bg-white rounded-md w-[177px]">
                  View All
                </button>
              </div>
              <div className="lg:w-2/3 flex w-full justify-center xl:justify-end order-1 lg:order-2">
                <div className="">
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="mt-6 lg:-mt-[4.5rem] flex items-center relative z-20">
        <Container>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <Link to="/requestcatelog">
                <div className="bg-[#DBE1EA] rounded-lg py-2 pl-4 pr-4 md:pr-12 lg:pr-2 xl:pr-12 min-h-[84px] md:min-h-[115px] xl:min-h-[130px] flex items-center">
                  <div className=" flex items-center mr-[15px] md:mr-[27px] max-w-[60px] md:max-w-[90px]">
                    <img
                      src={bannerbottom4}
                      alt=""
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <p className="text-[16px] md:text-2xl font-bold">
                    Request Catalogue{" "}
                  </p>
                </div>
              </Link>
              <div
                className="bg-[#3D8BDC] rounded-lg py-2 pl-4 pr-4 md:pr-12 lg:pr-2 xl:pr-12 min-h-[84px] md:min-h-[115px] xl:min-h-[130px] flex items-center cursor-pointer"
                onClick={handleDownloadPopup}
              >
                <div className="flex items-center mr-[15px] md:mr-[27px] max-w-[60px] md:max-w-[90px]">
                  <img
                    src={bannerbottom1}
                    alt=""
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <p className="text-[16px] md:text-2xl font-bold text-white">
                  Download Densol App{" "}
                </p>
              </div>
              <Link to="/openaccount">
                <div className="bg-[#DBE1EA] rounded-lg py-2 pl-4 pr-4 md:pr-12 lg:pr-2 xl:pr-12 min-h-[84px] md:min-h-[115px] xl:min-h-[130px] flex items-center">
                  <div className=" flex items-center mr-[15px] md:mr-[27px] max-w-[60px] md:max-w-[90px]">
                    <img
                      src={bannerbottom2}
                      alt=""
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <p className="text-[16px] md:text-2xl font-bold">
                    Register with Densol{" "}
                  </p>
                </div>
              </Link>
              <div className="bg-[#55BE92] rounded-lg py-2 pl-4 pr-4 md:pr-12 lg:pr-2 xl:pr-12 min-h-[84px] md:min-h-[115px] xl:min-h-[130px] flex items-center">
                <div className="flex items-center mr-[15px] md:mr-[27px] max-w-[60px] md:max-w-[90px]">
                  <img
                    src={bannerbottom3}
                    alt=""
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <p className="text-[16px] md:text-2xl font-bold text-white">
                  Expo Promotion
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-10 mb:12 md:mt-24 md:mb-32">
        <Container>
          <div>
            <div className="flex gap-10">
              <div className="w-1/3 hidden md:flex h-[455px] bg-[#DEE3E9] items-center rounded-lg px-6">
                <img
                  src={surgicalitem}
                  alt=""
                  className="w-[270px] h-[360px] mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="font-bold text-[30px] md:text-4xl my-3 ">
                  Some Words About
                  <span className="text-[#3C59A5]"> Densol</span>
                </h2>
                <p className="text-[22px]  leading-[30px] md:leading-[43px] tracking-[1px]">
                  A company that entails the experience of more than six decades
                  in manufacturing and selling Surgical instruments, Dental
                  instruments worldwide. Densol is a family business where we
                  value finest quality at the best prices. We have been
                  manufacturing all these instruments which allow us to beat the
                  prices and produce the best quality to meet the customers’
                  expectations. Our Australian office is located in Melbourne
                  and this is from where we are looking after the Valuable
                  customers from Australia and New Zealand.
                </p>
                <div className="mt-10">
                  <Button classname="py-3 px-8">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="sale-section py-[3rem] md:py-[6.5rem] my-12">
        <Container>
          <div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 content-center items-center">
              <div className=" col-start-2 md:col-start-1">
                <img src={featurep2} alt="" />
              </div>
              <div className="xl:px-10 col-start-1  row-start-1 row-span-2 md:col-start-2 md:row-span-1">
                <div className="text-center ">
                  <p className="text-[32px] lg:text-[61px] leading-[36.39px] lg:leading-[60.65px] text-[#292D32] font-bold">
                    Sets & Kits
                  </p>
                  <p className="text-[17px] lg:text-[20px] leading-[17px] lg:leading-[24.25px] text-white my-2">
                    Ends This Weekend
                  </p>
                  <p className="text-[20px] font-bold lg:text-[76px] leading-[24.26px] lg:leading-[80px] bg-[#292D32] text-[#7CE1EA] mx-3">
                    BIG SALE
                  </p>
                  <p className="text-[20px] lg:text-[50px] leading-[24.26px] lg:leading-[60.65px] bg-white text-[#292D32]">
                    Up to 50% off
                  </p>
                  <p className="text-[14px] lg:text-[20px] leading-[17px] lg:leading-[24.25px] text-white px-6 lg:px-0 mt-2">
                    Use code DENSOL on select sale style
                  </p>
                </div>
                <div className="flex mt-12 items-center justify-center">
                  <button className="flex bg-[#292D32] text-white rounded py-2 px-4">
                    SHOP NOW
                    <span className="ml-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.43 5.92999L20.5 12L14.43 18.07"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.50008 12H20.3301"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-start-2  row-start-2 md:col-start-3 md:row-start-1">
                <img src={featurep1} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="my-20 overflow-hidden">
        <Container>
          <div>
            <div>
              <div className="flex justify-center items-center mb-12">
                <h2 className="text-[26px] md:text-[40px] font-[ProductSansBold] font-bold">
                  DENSOL Dental Solutions
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row xl:gap-2 2xl:gap-6">
                <div className="w-full lg:w-1/3 2xl:w-1/4">
                  <div className="hidden lg:block">
                    {tabs.map((tab, index) => (
                      <div key={index} onClick={() => handletabclick(index)}>
                        <h3
                          className={`cursor-pointer font-bold text-[28px]  leading-[64px] tracking-[1.5px] ${
                            activeTab == index
                              ? "text-[#3C59A5]"
                              : "text-[#6F7985]"
                          }`}
                        >
                          {tab.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <div
                    className=" lg:hidden flex overflow-scroll"
                    style={{
                      WebkitScrollbar: { display: "none" },
                      scrollbarWidth: "none",
                    }}
                  >
                    {tabs.map((tab, index) => (
                      <div key={index} onClick={() => handletabclick(index)}>
                        <h3
                          className={`cursor-pointer text-[15px] py-2 min-w-[150px] text-center pb-4 ${
                            activeTab == index
                              ? "text-[#3C59A5] border-b-2 border-[#3C59A5]"
                              : "text-[#6F7985] border-b-2 border-[#DBE1EA]"
                          }`}
                        >
                          {tab.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-2/3 2xl:w-3/4 py-6">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-100%" }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="grid grid-cols-2 lg:grid-cols-3  gap-3 2xl:gap-6"
                  >
                    {tabData.product.slice(0, 6).map((product) => (
                      <div className="bg-[#E7ECF1] rounded-md p-2 md:p-4">
                        <div className="mb-3">
                          <img
                            src={product.img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="lg:text-[18px] text-[14px] font-bold">
                          {product.pname}
                        </h4>
                      </div>
                    ))}
                  </motion.div>
                  {/* {tabData.product.length > 6 && (
                    <div className="mt-16 flex items-center justify-end">
                      <Button classname="py-4 px-10">Explore All</Button>
                    </div>
                  )} */}
                  <div className="mt-16 flex items-center justify-start lg:justify-end ">
                    <Link to="/shoppage">
                      <Button classname="py-4 px-6 border-[1.5px] text-[16px] border-white font-bold">
                        EXPLORE ALL
                        <span className="ml-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.43 5.93L20.5 12L14.43 18.07"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3.50008 12H20.3301"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gradient-to-r from-[#307BC9] to-[#3C59A5] my-10 py-4">
        <Container>
          <div className="py-10 lg:py-28 ">
            <div className="flex items-center justify-center mb-5 relative testimonail">
              <h2 className="lg:text-[40px] text-[22px] font-bold text-white">
                We Care About Our Customers
              </h2>
            </div>
            <div className="hidden lg:block relative testimonial-slide">
              <Slider {...settings}>
                {commentsdata.map((comment) => (
                  <div key={comment.id}>
                    <div className="flex my-6 gap-2">
                      <div className="  w-1/3 rounded-md">
                        <div className=" w-[291px] mx-auto">
                          <img
                            src={comment.img}
                            alt=""
                            className=" object-cover rounded-md mx-auto"
                          />
                        </div>
                      </div>
                      <div className="w-2/3 py-6 pr-48">
                        <h3 className="font-bold text-[32px] text-white">
                          Very Excellent !!
                        </h3>
                        <p className="text-[16px] text-white my-6  opacity-70 leading-[35px] font-normal">
                          {comment.comment}
                        </p>
                        <p className="font-bold text-[20px] text-[white] tracking-[3px]">
                          {comment.name}
                        </p>
                        <p className="font-bold text-[16px] text-[white]">
                          {comment.desig}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="block lg:hidden testimonial-slide relative">
              <OwlCarousel className="owl-theme " {...options}>
                {commentsdata.map((comment) => (
                  <div key={comment.id}>
                    <div className="max-w-[120px] max-h-[150px] rounded-md  mx-auto my-3">
                      <img
                        src={comment.img}
                        alt=""
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-[22px] font- text-white leading-[54.12px]">
                        Very Excellent !!
                      </h3>
                      <p className="text-[16px] text-white mx-4 opacity-70 leading-[24px] font-normal">
                        {comment.comment}
                      </p>
                      <p className="font-bold text-[20px] text-[white] tracking-[3px] my-3">
                        {comment.name}
                      </p>
                      <p className="font-bold text-[16px] text-[white]">
                        {comment.desig}
                      </p>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </Container>
      </div>
      <div className="my-16">
        <Container>
          <div>
            <div className="mb-12">
              <h2 className="text-center text-[40px] font-bold tracking-[2px] ">
                Densol Events
              </h2>
              <p className=" text-center text-[20px]">
                Dicover the next events and stay updarted on all our news.
              </p>
            </div>
            <ul className="mb-16">
              {events.map((event) => (
                <li
                  className="cursor-pointer border-b border-[#B3BAC3] last:border-b-0 py-6 flex justify-between items-center pr-4 "
                  key={event.id}
                  onClick={eventnavigae}
                >
                  <div className="flex justify-between items-center">
                    <div className="mr-6 rounded w-[96px] h-[84px]">
                      <img
                        src={event.img}
                        alt=""
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <div className="text-[12px] sm:text-[20px] ">
                        {event.date}
                      </div>
                      <div className="text-[#3C59A5] text-[20px] sm:text-[28px] font-bold">
                        {event.name}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      width="14"
                      height="24"
                      viewBox="0 0 14 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 22.0568L12 12.0284L2 2"
                        stroke="#2367AE"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-center my-16">
              <Link to="/eventlisting">
                <Button classname="py-4 px-16 min-w-[200px]">ViewAll</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="my-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8 my-20">
            <div className="bg-[#F0F3F7] rounded-[10px] md:w-1/2 flex justify-start flex-col items-center px-5 md:px-10 py-6 min-h-[200px]  md:min-h-[320px]">
              <div className="mb-4 w-[90px] h-[90px] md:w-[150px] md:h-[150px] rounded-[50%] bg-gradient-to-br from-[#307BC9] to-[#3C59A5] flex justify-center items-center p-3">
                <img src={Layer_1} alt="" className="mx-auto" />
              </div>
              <p className="font-bold text-[26px] lg:text-[38px]  text-[#292D32] text-center ">
                Distribution Enquiry
              </p>
            </div>
            <div className="bg-[#F0F3F7] rounded-[10px] md:w-1/2 flex justify-start flex-col items-center px-5 md:px-10 py-6 min-h-[200px]  md:min-h-[320px]">
              <div className="mb-4 w-[90px] h-[90px] md:w-[150px] md:h-[150px]  rounded-[50%] bg-gradient-to-br from-[#327C9B] to-[#86DDD2] flex justify-center items-center p-4">
                <img src={Layer_2} alt="" className="mx-auto" />
              </div>
              <p className="font-bold text-[26px] lg:text-[38px] text-[#292D32] text-center  xl:px-10">
                Sterilizing & Cleaning Instructions
              </p>
            </div>
          </div>
        </Container>
      </div>
      {qrPopUp && <QRpopup setQrPopUp={setQrPopUp} />}
    </>
  );
};

export default Main;

const commentsdata = [
  {
    id: 1,
    img: comments,
    comment:
      "The instruments I purchased from Densol were great. Such excellent quality for the price. They look great and are comfortable to hold. Wahab gave great service in finding what I needed, and his staff were very patient. The instruments arrived quickly. I will definitely be back for more.",
    name: "Meredith Metin",
    desig: "Dentist",
  },
  {
    id: 2,
    img: comments,
    comment:
      "The instruments I purchased from Densol were great. Such excellent quality for the price. They look great and are comfortable to hold. Wahab gave great service in finding what I needed, and his staff were very patient. The instruments arrived quickly. I will definitely be back for more.",
    name: "Meredith Metin",
    desig: "Dentist",
  },
  {
    id: 3,
    img: comments,
    comment:
      "The instruments I purchased from Densol were great. Such excellent quality for the price. They look great and are comfortable to hold. Wahab gave great service in finding what I needed, and his staff were very patient. The instruments arrived quickly. I will definitely be back for more.",
    name: "Meredith Metin",
    desig: "Dentist",
  },
];

const options = {
  margin: 30,
  nav: true,
  dots: true,
  autoplay: false,
  smartSpeed: 1000,
  items: 1,
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};
