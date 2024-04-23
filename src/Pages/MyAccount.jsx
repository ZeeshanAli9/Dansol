import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import UserInfo from "../Components/Login/UserInfo";
import UserProfileTabs from "../Components/Login/UserProfileTabs";
import Container from "../Components/Container";

const MyAccount = () => {
  return (
    <div>
      <Nav />
      <UserInfo />
      <main>
        <Container>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3 lg:w-1/4 ">
              <UserProfileTabs />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <Outlet />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default MyAccount;
