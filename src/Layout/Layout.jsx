import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";
import DashboardC from "../Page/DashboardC";
import FormC from "../Page/FormC";
import { Tooltip } from "../Page/Tooltip";
import Invoice from "../Page/Invoice";
import Dashboard from "../Page/Dashboard";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex font-poppins">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <Dashboard />
        {/* {children} */}
        {/* <DashboardC /> */}
        {/* <FormC /> */}
        {/* <div className="w-10 flex">
          <Tooltip content={"Top"} position={"top"}>
            top
          </Tooltip>
          <Tooltip content={"Bottom"} position={"Bottom"}>
            top
          </Tooltip>
          <Tooltip content={"left"} position={"left"}>
            top
          </Tooltip>
          <Tooltip content={"right"} position={"right"}>
            top
          </Tooltip>
        </div> */}
        {/* <Invoice/>                 */}
      </main>
    </div>
  );
};

export default Layout;
