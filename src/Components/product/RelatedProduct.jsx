import React from "react";
import PI from "../../assets/PI.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductDs from "../reuseables/ProductDs";
import PI2 from "../../assets/PI2.png";
import PI3 from "../../assets/PI3.png";
import { Link } from "react-router-dom";

function RelatedProduct() {
  // const options = {
  //   margin: 30,
  //   responsiveClass: true,../
  //   nav: true,
  //   dots: false,
  //   autoplay: false,
  //   smartSpeed: 1000,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     400: {
  //       items: 2,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     767: {
  //       items: 2,
  //     },
  //     800: {
  //       items: 3,
  //     },

  //     1000: {
  //       items: 3,
  //     },
  //     1200: {
  //       items: 4,
  //     },
  //   },
  // };

  return (
    <div className="lg:container lg:mx-auto  2xl:max-w-custom px-2 lg:px-0">
      <div className="pt-[52px] relative ">
        <div className="">
          <h2 className="text-[32px] md:text-[40px] font-bold">
            Related products
          </h2>
        </div>

        <div className="mt-[70px] cursor-pointer grid grid-cols-2 lg:grid-cols-4 gap-11">
          {/* <OwlCarousel className="owl-theme " {...options}> */}
          {detailP.map((item) => (
            <ProductDs item={item} />
          ))}
          {/* </OwlCarousel> */}
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;

const detailP = [
  {
    id: 1,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-12",
    qty: 1,
  },
  {
    id: 2,
    Image: PI2,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-13",
    qty: 1,
  },
  {
    id: 3,
    Image: PI3,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-15",
    qty: 1,
  },
  {
    id: 4,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-18",
    qty: 1,
  },
];
