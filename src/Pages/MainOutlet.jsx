import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../Components/Footer";

const MainOutlet = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainOutlet;
