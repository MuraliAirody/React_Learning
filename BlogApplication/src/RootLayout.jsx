import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
}

export default RootLayout;
