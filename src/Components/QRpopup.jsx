import React from "react";
import QR1 from "../assets/QR1.png";
import closecirclemb from "../assets/close-circle-mb.png";
import closecircle from "../assets/close-circle.png";
import googleplay from "../assets/GooglePlay.png";
import appstore from "../assets/AppStore.png";
import logofoot from "../assets/logofoot.png";
import qrproduct from "../assets/qrproduct.png";

export default function QRpopup({ setQrPopUp }) {
  const closepopup = () => {
    setQrPopUp(false);
    window.document.querySelector("body").style.overflow = "auto";
  };
  return (
    <>
      <div className="bg-[#000000cc]  fixed inset-0 z-[100]">
        <div className="absolute top-[30px]  lg:top-[180px] left-[50%] -translate-x-[50%] z-[110] bg-white rounded-[20px] border-[12px] border-white min-w-[340px] lg:min-w-[850px] max-w-[860px]">
          <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="relative">
              <div
                className="lg:hidden cursor-pointer flex items-center justify-end absolute top-0 right-0"
                onClick={closepopup}
              >
                <img src={closecirclemb} alt="" />
              </div>
              <div className="">
                <h2 className="text-[30px] lg:text-[36px] text-[#3C59A5] font-bold text-center mt-5 lg:mt-10 my-4 leading-[43px]">
                  Scan QR Code to <br /> Download App
                </h2>
                <p className="text-[15px] text-center lg:px-16 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="flex items-center justify-center my-5 lg:my-10">
                <img src={QR1} alt="" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#307BC9] to-[#3C59A5] rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-b-[0px] relative px-7 lg:px-10">
              <div
                className="hidden  cursor-pointer lg:flex items-center justify-end absolute top-0 right-0 mr-2 mt-2"
                onClick={closepopup}
              >
                <img src={closecircle} alt="" />
              </div>
              <div className="flex items-center justify-center mt-5 lg:mt-10 my-4">
                <img src={logofoot} alt="" />
              </div>
              <div className="text-white  text-center my-3">
                <p>For better experience Densol is available on Mobile App</p>
              </div>
              <div className="flex items-center justify-center gap-2 my-5">
                <a
                  href="https://apps.apple.com/pk/app/densol-ar-instrumed/id6450982605"
                  target="_blank"
                  className="block"
                >
                  <div>
                    <img src={appstore} alt="" />
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.tecmyer.ar_instrumed"
                  target="_blank"
                  className="block"
                >
                  <div>
                    <img src={googleplay} alt="" />
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <img src={qrproduct} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
