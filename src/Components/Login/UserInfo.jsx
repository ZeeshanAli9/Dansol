import React from "react";
import Container from "../Container";

const UserInfo = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#307BC9] to-[#3C59A5]  py-4 mb-12">
        <Container>
          <div className="flex items-center">
            <div className="bg-[#2BA7EB] min-h-[70px] min-w-[70px] rounded-[50%] flex items-center justify-center text-white font-semibold text-3xl mr-4">
              AA
            </div>
            <div className="text-white font-bold ">
              <p className="text-lg md:text-[22px]">Andrew Ainsley</p>
              <p className="text-base md:text-lg">andrew.ainsley@gmail.com</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UserInfo;
