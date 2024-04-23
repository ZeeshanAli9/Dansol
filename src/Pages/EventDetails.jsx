import React, { useLayoutEffect } from "react";
import Container from "../Components/Container";
import EventD1 from "../assets/EventD1.png";
import EventL2 from "../assets/EventL2.png";
import EventL1 from "../assets/EventL1.png";

function EventDetails() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <Container>
          <div className="my-3 ">Home / Blogs</div>
          <div className="my-10">
            <h2 className="font-bold text-[28px] my-2  lg:text-[#292D32]">
              ADX23 Sydney
            </h2>
            <p className="text-[14px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the  Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 
            </p>
          </div>
          <div className="mb-20">
            {eventdetail.map((item) => (
              <div key={item.id}>
                <div className="max-h-[700px]  mb-10">
                  <img src={item.img} alt="" />
                </div>

                <div className="my-10">
                  <h2 className="font-bold text-[32px] my-2">Photo Gallery</h2>
                </div>

                <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                  {item.gallery.map((gallery) => (
                    <div key={gallery.id}>
                      <div className="max-h-[215px] ">
                        <img
                          className="w-full object-cover"
                          src={gallery.subimg}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default EventDetails;

const eventdetail = [
  {
    id: 1,
    img: EventD1,
    gallery: [
      {
        id: 2,
        subimg: EventL1,
      },
      {
        id: 3,
        subimg: EventL2,
      },
      {
        id: 4,
        subimg: EventL1,
      },
      {
        id: 5,
        subimg: EventL2,
      },
      {
        id: 6,
        subimg: EventL1,
      },
      {
        id: 7,
        subimg: EventL2,
      },
      {
        id: 8,
        subimg: EventL1,
      },
      {
        id: 9,
        subimg: EventL2,
      },
    ],
  },
];
