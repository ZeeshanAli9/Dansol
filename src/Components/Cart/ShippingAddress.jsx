import React from "react";

const ShippingAddress = () => {
  return (
    <>
      <div className=" mb-16">
        {shippingData.map((data) => (
          <div
            key={data.id}
            className="flex justify-between shadow-sm drop-shadow-sm rounded-xl border border-white mb-6 last:mb-0 p-4 relative md:p-8"
          >
            <div>
              <p className="font-bold text-xl text-[#14477D] mb-2">
                {data.Place}
              </p>
              <p className="text-[#2367AE] ">{data.Name}</p>
              <p className="text-[#8A8D9F] mb-2">{data.Address}</p>
              <p className="text-[#2367AE] text-sm">Note: {data.Note} </p>
            </div>
            <div className="flex flex-row-reverse sm:flex-col items-center absolute sm:static right-4">
              <span className=" flex self-end sm:mb-2 ml-2 sm:ml-0">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="26" height="26" rx="4" fill="#2BA7EB" />
                  <path
                    d="M12.332 6.33325H10.9987C7.66536 6.33325 6.33203 7.66659 6.33203 10.9999V14.9999C6.33203 18.3333 7.66536 19.6666 10.9987 19.6666H14.9987C18.332 19.6666 19.6654 18.3333 19.6654 14.9999V13.6666"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.6933 7.01326L10.4399 12.2666C10.2399 12.4666 10.0399 12.8599 9.99992 13.1466L9.71325 15.1533C9.60659 15.8799 10.1199 16.3866 10.8466 16.2866L12.8533 15.9999C13.1333 15.9599 13.5266 15.7599 13.7333 15.5599L18.9866 10.3066C19.8933 9.39992 20.3199 8.34659 18.9866 7.01326C17.6533 5.67992 16.5999 6.10659 15.6933 7.01326Z"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.9375 7.7666C15.3842 9.35993 16.6308 10.6066 18.2308 11.0599"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[#307BC9] text-sm sm:text-base">
                {data.Invoice_no}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShippingAddress;

const shippingData = [
  {
    id: 1,
    Place: "House",
    Name: "James Alexander",
    Address:
      "Rawa Bodak Lurah, PS, Maninggis, Setia Budi, jakarto Selatn, Daerah Khusus Ibukota Australia.",
    Note: "Gerbang Orange",
    Invoice_no: "097120871010131",
  },
  {
    id: 2,
    Place: "House",
    Name: "James Alexander",
    Address:
      "Rawa Bodak Lurah, PS, Maninggis, Setia Budi, jakarto Selatn, Daerah Khusus Ibukota Australia.",
    Note: "Gerbang Orange",
    Invoice_no: "097120871010131",
  },
  {
    id: 3,
    Place: "Office",
    Name: "James Alexander",
    Address:
      "Rawa Bodak Lurah, PS, Maninggis, Setia Budi, jakarto Selatn, Daerah Khusus Ibukota Australia.",
    Note: "Gerbang Orange",
    Invoice_no: "097120871010131",
  },
  {
    id: 4,
    Place: "House",
    Name: "James Alexander",
    Address:
      "Rawa Bodak Lurah, PS, Maninggis, Setia Budi, jakarto Selatn, Daerah Khusus Ibukota Australia.",
    Note: "Gerbang Orange",
    Invoice_no: "097120871010131",
  },
  {
    id: 5,
    Place: "House",
    Name: "James Alexander",
    Address:
      "Rawa Bodak Lurah, PS, Maninggis, Setia Budi, jakarto Selatn, Daerah Khusus Ibukota Australia.",
    Note: "Gerbang Orange",
    Invoice_no: "097120871010131",
  },
];
