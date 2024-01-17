import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import SideBarItems from "./SideBarItems";
function Sidebar() {
  const location = useLocation();

  const [active, setActive] = React.useState();

  return (
    <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0 ps z-40">
      <nav className="">
        <div className="p-4 pb-8 flex justify-between items-center">
          <img src={Logo} alt="" className="w-60" />
          </div>
        <hr className="p-2"/>
        <ul className="p-2">
          <SideBarItems
            text={"Inicio"}
            path={"/"}
            active={location.pathname == "/" ? true : false}
          />
          <SideBarItems
            text={"Sub Agentes"}
            path={"/sub_agent"}
            active={location.pathname == "/sub_agent" ? true : false}
          />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
