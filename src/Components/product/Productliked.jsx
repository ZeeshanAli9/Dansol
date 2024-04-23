import React from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import Container from "../Container";
import { Link } from "react-router-dom";

function Productliked() {
  return (
    <div>
      <Container>
        <div className="pt-[85px] pb-3">
          <div>
            <h2 className="text-[32px]  md:text-[40px] font-bold mb-4">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 place-content-center  w-full gap-5 my-12">
            {data.map((item) => (
              <Link to="/shoppage">
                <div
                  key={item.id}
                  className="rounded-xl bg-blue-100 p-8 text-center min-w-[100%] min-h-[200px] lg:min-h-[220px] xl:min-h-[290px]"
                >
                  <div className="card ">
                    <div className=" flex justify-center items-center mb-4  max-w-[80px] max-h-[100px] min-h-[99px] lg:min-w-[100px] lg:min-h-[100px] xl:min-w-[150px] xl:min-h-[150px] mx-auto">
                      <img
                        src={item.Image}
                        alt=""
                        className="w-[100%] h-[100%] object-contain "
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[18px] md:text-[24px] mt-[25px] lg:mt-[38px]">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Productliked;

const data = [
  {
    id: 1,
    Image: product1,
    name: "Extraction",
  },
  {
    id: 2,
    Image: product2,
    name: "Diagnostic",
  },
  {
    id: 3,
    Image: product1,
    name: "Root Elevators",
  },
  {
    id: 4,
    Image: product2,
    name: "Orthodontic",
  },
];
