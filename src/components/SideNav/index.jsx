import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { dataInput } from "../data/dataInput";
// import { sidebarData } from "./data.sidebar";
import SidebarItem from "./SidebarItem.jsx";

const SideNav = () =>{
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  // console.log(sidebarData)
  // console.log(dataInput);
  return (
    <>
      <div
        className={sidebar ? "sidebar-container active " : "sidebar-container"}
      >
        <div className="sidebar-burger-wrap-back">
          <div className="sidebar-burger-wrap " onClick={toggleSidebar}>
            <div className="sidebar-burger"></div>
          </div>
        </div>
        {dataInput.map((item, index) => (
          <SidebarItem key={index} item={item} handleClick={toggleSidebar} />
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default SideNav;

