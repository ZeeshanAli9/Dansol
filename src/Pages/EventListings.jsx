import React, { useLayoutEffect } from "react";
import Container from "../Components/Container";
import EventL2 from "../assets/EventL2.png";
import Button from "../Components/reuseables/Button";
import EventL1 from "../assets/EventL1.png";
import { Link } from "react-router-dom";

function EventListings() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="mb-20">
        <Container>
          <div className="my-3 ">Home / Events</div>
          <div className="my-10">
            <h2 className="font-bold text-[32px] my-2">Densol Events</h2>
          </div>
          <div>
            <div className="text-[22px] font-bold my-2">Year 2024</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mb-20">
              {yearfirst.map((item) => (
                <Link to="/eventdetail">
                  <div key={item.id}>
                    <div className="w-full">
                      <img className="w-full" src={item.Image} alt="" />
                    </div>
                    <Button classname="rounded-b-lg rounded-t-none py-4 w-full -mt-3 relative z-10">
                      {item.name}
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[22px] font-bold my-2">Year 2023</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {yearsecond.map((item) => (
                <Link to="/eventdetail">
                  <div key={item.id}>
                    <div className="w-full">
                      <img className="w-full" src={item.Image} alt="" />
                    </div>
                    <Button classname="rounded-b-lg rounded-t-none py-4 w-full -mt-3 relative z-10">
                      {item.name}
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[22px] font-bold my-2">Year 2022</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {yearthird.map((item) => (
                <Link to="/eventdetail">
                  <div key={item.id}>
                    <div className="w-full">
                      <img className="w-full" src={item.Image} alt="" />
                    </div>
                    <Button classname="rounded-b-lg rounded-t-none py-4 w-full -mt-3 relative z-10">
                      {item.name}
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default EventListings;

const yearfirst = [
  {
    id: 1,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
  {
    id: 2,
    Image: EventL2,
    name: "ADX23 Sydney",
  },
  {
    id: 3,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
  {
    id: 4,
    Image: EventL2,
    name: "ADX23 Sydney",
  },
  {
    id: 5,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
  {
    id: 6,
    Image: EventL2,
    name: "ADX23 Sydney",
  },
];

const yearsecond = [
  {
    id: 1,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
  {
    id: 2,
    Image: EventL2,
    name: "ADX23 Sydney",
  },
  {
    id: 3,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
];

const yearthird = [
  {
    id: 1,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
  {
    id: 2,
    Image: EventL2,
    name: "ADX23 Sydney",
  },
  {
    id: 3,
    Image: EventL1,
    name: "ADX23 Sydney",
  },
];
