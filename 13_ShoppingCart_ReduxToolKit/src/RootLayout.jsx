import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
function RootLayout() {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
}

export default RootLayout;
