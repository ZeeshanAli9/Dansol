import React from "react";
import favorite from "../../assets/favourite.webp";
import PI from "../../assets/PI.png";

const Favorite = () => {
  return (
    <>
      <div className="mb-28">
        {tabData.length >= 1 ? (
          <div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {tabData.map((tab) => (
                <div
                  key={tab.id}
                  className="flex justify-between  rounded-lg bg-[#F0F2F6] border border-white drop-shadow-3xl p-3"
                >
                  <div className="relative w-[80px] h-[80px] sm:w-[90px] sm:h-[86px] rounded-lg">
                    <img src={tab.Image} alt="" className="rounded-lg" />
                    <span className="absolute -top-2 -right-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C17.713 0 21.274 1.475 23.8995 4.1005C26.525 6.72601 28 10.287 28 14Z"
                          fill="#DE5F63"
                        />
                        <path
                          d="M15.3705 8.91233C14.7983 9.24658 14.3254 9.72692 14 10.3041C13.3375 9.12736 12.0918 8.39948 10.7413 8.40015C8.63022 8.51416 6.98219 10.2685 7.00015 12.3826C7.00015 17.5721 14 21.1927 14 21.1927C14 21.1927 20.9999 17.574 20.9999 12.3826C21.0178 10.2681 19.3692 8.51369 17.2578 8.40015C16.5943 8.40035 15.943 8.57713 15.3705 8.91233Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="basis-[55%] sm:basis-[68%] lg:basis-[75%] xl:basis-[65%]">
                    <h2 className="font-bold text-base sm:text-lg text-[#14477D]">
                      {tab.Pname}
                    </h2>
                    <p className="font-bold text-[#307BC9]">
                      Price: $ {tab.price}
                    </p>
                  </div>
                  <div>
                    <button className=" bg-gradient-to-r from-[#307BC9] to-[#3C59A5] px-2 py-2 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.67188 1.66675H3.12188C4.02188 1.66675 4.73021 2.44175 4.65521 3.33341L3.96354 11.6334C3.84687 12.9917 4.92187 14.1584 6.28854 14.1584H15.1635C16.3635 14.1584 17.4135 13.1751 17.5052 11.9834L17.9552 5.73342C18.0552 4.35009 17.0052 3.22508 15.6135 3.22508H4.85521"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5417 18.3333C14.117 18.3333 14.5833 17.867 14.5833 17.2917C14.5833 16.7164 14.117 16.25 13.5417 16.25C12.9664 16.25 12.5 16.7164 12.5 17.2917C12.5 17.867 12.9664 18.3333 13.5417 18.3333Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.8737 18.3333C7.44899 18.3333 7.91536 17.867 7.91536 17.2917C7.91536 16.7164 7.44899 16.25 6.8737 16.25C6.2984 16.25 5.83203 16.7164 5.83203 17.2917C5.83203 17.867 6.2984 18.3333 6.8737 18.3333Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.50391 6.66675H17.5039"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center">
              <img src={favorite} alt="" />
            </div>
            <div className="mt-12">
              <h3 className="font-bold text-2xl text-center mb-4">
                No Favorites Yet
              </h3>
              <p className=" text-center text-[#72777F]">
                Your recommendations get better as <br /> you favorite more
                things.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorite;

const tabData = [
  {
    id: 1,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-20",
    qty: 1,
  },
  {
    id: 2,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "950.00",
    SKU: "106-21",
    qty: 1,
  },
  {
    id: 3,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "990.00",
    SKU: "106-22",
    qty: 1,
  },
  {
    id: 4,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "550.23",
    SKU: "106-23",
    qty: 1,
  },
  {
    id: 5,
    Image: PI,
    Pname: "Ridge Mapping Caliper 0-25mm Scale",
    price: "50.00",
    SKU: "106-24",
    qty: 1,
  },
];
